/**
 * conlabz varnish reloader plugin
 */
(function($, window, document, Mage, undefined) {

    var pluginName = 'varnishReloader',
        reqData = {
            blocks: null,
            handles: null,
            returnUrl: null
        },
        that,
        counter = 0,
        defaults = {            
            debug: true,
            returnUrl: null,
            uenc: null,
            ajaxUrl: '/varnish/call/ajax',
            currentStore: 'default',
            currentLayout: '1-column',
            phSelector: '.varnish-ph',
            msgSelector: 'div.main',
            msgInsertHandler: 'prepend',
            refreshCookie: 'refresh-ph',
            noCacheCookie: 'varnish_pass',
            idPrefix: '__block__',
            handles: [
                'default'
            ],
            refreshUrlParts: [
                '___from_store'
            ]
        };
        
    function Plugin(element, options) {
        that = this;
        this.element = $(element);
        this.options = $.extend({}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        
        init: function() {   
            this.collectPlaceholders();
            this.refreshPlaceholders();
            this.element.on('varnish.forcerefresh', function() {
                that.refreshPlaceholders(true);
            });
            return this;
        },
        collectPlaceholders: function() {
            if (null === reqData.blocks) {
                reqData.blocks = {};
                $(this.options.phSelector).each(function() {
                    var id = $(this).attr('id');
                    if (!id) {
                        id = 'v-ph_' + counter;
                        $(this).attr('id', id);
                    }
                    var blockname = $(this).attr('data-blockname');
                    if (blockname) {
                        reqData.blocks[id] = blockname;
                        counter++;
                    } else {
                        throw 'Found placeholder without data-blockname attribute: ' + id;
                    }
                });
            }
            return reqData.blocks;
        },
        getStoredPlaceholders: function() {
            var placeholders = {};
            try {
                for(var id in sessionStorage) {
                    if (id.indexOf(that.options.idPrefix) === 0) {
                        var $cachedPh = $(sessionStorage.getItem(id));
                        id = id.replace(that.options.idPrefix, '');
                        placeholders[id] = this.filterHtml($cachedPh);
                    }
                }
            } catch(e) {
                return false;
            }
            return placeholders;
        },
        filterHtml: function($html) {
            $html.find("a[href*='/uenc/']").each(function() {
                var href = $(this).attr('href'),
                    newHref = href.replace(/\/uenc\/.*\//, '/uenc/' + that.options.uenc);
                $(this).attr('href', newHref);                
            });
            return $html;
        },
        checkRefreshUrl: function() {
            var check = false;
            $.each(that.options.refreshUrlParts, function(i, urlPart) {
                if (window.location.href.indexOf(urlPart) !== -1) {
                    check = true;
                    that._debug('url parts forced refresh');
                }
            });
            return check;
        },
        hasChanged: function(type) {
            if (Mage.Cookies.get(type) !== this.options[type]) {
                Mage.Cookies.set(type, this.options[type]);
                that._debug(type + ' change forced refresh');
                return true;
            }
            return false;
        },
        checkRefreshCookie: function() {
            var refresh = Mage.Cookies.get(that.options.refreshCookie);
            if (refresh == 1) {
                that._debug('refresh cookie forced refresh');
                return true;
            }
            return false;
        },
        compareStoredPlaceholders: function() {
            var storedPlaceholders = this.getStoredPlaceholders(),
                currentPlaceholders = this.collectPlaceholders();
            for (var blockName in currentPlaceholders) {
                if (!storedPlaceholders.hasOwnProperty(blockName)) {
                    that._debug('placeholder compare forced refresh');
                    return true;
                }
            }
            return false;
        },
        checkNoCacheCookie: function() {
            if (Mage.Cookies.get(this.options.noCacheCookie) == 1) {
                this._debug('no-cache-cookie set. May refresh blocks.');
                return true;
            }
            return false;
        },
        checkProtocol: function() {
            if (Mage.Cookies.get('varnish_refreshed_protocol') !== window.location.protocol) {
                this._debug('protocol change forced refresh.');
                Mage.Cookies.clear('varnish_refreshed_protocol');
                return true;
            }
            return false;
        },
        shouldRefresh: function() {
            return (
                this.checkNoCacheCookie() && 
                (
                    this.hasChanged('currentStore') ||
                    //this.hasChanged('currentLayout') || 
                    this.checkRefreshCookie() ||
                    this.checkRefreshUrl() ||
                    typeof sessionStorage === "undefined" ||
                    this.compareStoredPlaceholders() ||
                    this.checkProtocol()
                )
            );
        },
        refreshPlaceholders: function(force) {
            var storedPlaceholders = this.getStoredPlaceholders();
            if (false !== storedPlaceholders) {
                for(var id in storedPlaceholders) {                
                    $('#' + id).html(storedPlaceholders[id]);
                }
            }
            if(!this.shouldRefresh() && !force) {
                this._debug('nothing to refresh.');
                return false;
            }
            if (counter > 0) {
                reqData.handles = this.options.handles;
                reqData.returnUrl = this.options.returnUrl;
                that.element.trigger('varnish.refresh.before', [reqData]);
                $.ajax({
                    url:        that.options.ajaxUrl,
                    data:       reqData,
                    dataType:   'json',
                    type:       'GET',
                    success: function(response) {
                        that.element.trigger('varnish.refresh', [response]);
                        for(var id in response.blocks) {
                            var $htmlBlock = that.filterHtml($(response.blocks[id]));
                            $('#' + id).html($htmlBlock);
                            try {
                                sessionStorage.setItem(that.options.idPrefix + id, response.blocks[id]);
                            } catch(e) {
                                that._debug(e);
                            }
                        }
                        var $msgContainer = $(that.options.msgSelector);
                        $.each(response.messages, function(i, msg) {
                            var $msg = $(msg).addClass('hidden');
                            $msgContainer[that.options.msgInsertHandler]($msg);
                            $msg.removeClass('hidden');
                        }); 
                        Mage.Cookies.set('varnish_refreshed_protocol', window.location.protocol);
                        that.element.trigger('varnish.refresh.after', [response]);
                    }
                });
                return true;
            } else {
                this._debug('Non-cacheable page or no placeholders found. Skipping refresh.');
            }
            return false;
        },
        _debug: function(message) {
            if (this.options.debug) {
                console.log('[' + pluginName + '] ' + message);
            }
        }
    };
    
    $.fn[pluginName] = function (options) {
        this.each(function() {
            if (!$.data( this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
        return this;
    };

})(jQuery, window, document, Mage);

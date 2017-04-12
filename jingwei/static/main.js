jQuery(function($) {
    
     $(window).on('scroll', function(e) {
        var $header = $('.header');
        var proximity = 20;
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= proximity) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });
    
    var toggleMenu = function(e) {
        e.preventDefault();
        $(this).toggleClass('inactive');
        if ($(this).hasClass('inactive')) {
            $('.main-nav').addClass('closed');
        } else {
            $('.main-nav').removeClass('closed');
        }
    };
    
    $('.products-button').on('click', function() {
        $(this).toggleClass('inactive');
        $('.main-nav').toggleClass('closed');
    });
    if ($('html').hasClass('no-touch')) {
        $('.products-button').on('mouseenter', function() {
            $(this).removeClass('inactive');
            $('.main-nav').removeClass('closed');
        });
    }
    
    $(".products-button, .main-nav").mouseenter(function(){
        clearTimeout($(this).data('timeoutId'));
        $(".products-button").removeClass('inactive');
        $('.main-nav').removeClass('closed');
    });
    $(".main-nav").mouseleave(function(){
        var someElement = $(this),
            timeoutId = setTimeout(function(){
                $(".products-button").addClass('inactive');
                $('.main-nav').addClass('closed');
            }, 500);
        //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
        someElement.data('timeoutId', timeoutId); 
    });
    
    $("#nav").on('mouseout', function() {
//            $(this).removeClass('inactive');
//            $('.main-nav').addClass('closed');
     });
    
    $('#navbar-toggle').on('click', function(e) {
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
    
    $('#sidebar-toggle').on('click', function(e) {
        e.preventDefault();
        var $wrapper = $('#wrapper');
        $wrapper.toggleClass('sidebar-open');
        if ($wrapper.hasClass('sidebar-open')) {
            $('body').css('overflow-x', 'hidden');
        } else {
            $('body').css('overflow-x', 'initial');
        }
    });
    
    $('.quick-access').swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            if (!$('.wrapper').hasClass('menu-open-l') || !fingerCount) {
                return;
            }
            $('.wrapper').toggleClass('menu-open-l');
        }
    });
    
    $(document).galleryZoom();
      
    mediaCheck({
        media: '(max-width: 759px)',
        entry: function() {
            $('#search_mini_form').detach().prependTo('.nav');
            var $cartHeader = $('#cart_header').detach();
            $('.header a.account').after($cartHeader);
            var $sidebar = $('.sidebar').detach();
            $('#wrapper').prepend($sidebar);
        },
        exit: function() {
            var $searchBar = $('#search_mini_form').detach();
            $('#top_links').after($searchBar);
            $('#cart_header').appendTo('.quick-access');            
            var $sidebar = $('.sidebar');
            $('#content').before($sidebar);
        }
    });
    
    $('.cart .btn-remove').on('click', function(e) {
        return confirm($(this).attr('title') + '?');
    });
    
    $('.sidebar-group.manufacturer select').on('change', function(e) {
        window.location.href = $(this).val();
    });
    
    // tooltip
    $(document).tooltip({
        items: "[data-info-content]",
        content: function() {
            return $(this).data('infoContent');
        },
        position: {
            my: "center bottom+70",
            at: "center bottom"
        }
    });
    
    (function($) {
        
        var $menu = $('#nav .catalog-nav, #nav ul.level0');
        $menu.menuAim({
            activate: function(row) {
                var $row = $(row); 
                
                if ($row.parent().hasClass("level0")){
	                $row.parent().find("li.level1 > ul").addClass("closed");
                }
                if ($row.parent().hasClass("level1")){
	                $row.parent().find("li.level2 > ul").addClass("closed");
                }
                
                $row.find('> ul').addClass('opened');
                $row.find('> ul').removeClass('closed');
            },
            deactivate: function(row) {
                var $row = $(row);
                $row.find('> ul').addClass('closed');
                $row.find('> ul').removeClass('opened');
            }
        });
        
        $menu.on('mouseenter', '[data-image]', function(e) {     
            var $bgElement = $menu.find('ul.level0.opened');
            var imageUrl = $(this).data('image');
            var fallbackImage = $(this).parents('li.level0').data('image'); 
            if (!imageUrl) {
                imageUrl = fallbackImage;
            }
            var background = imageUrl ? 'url(' + imageUrl + ')' : 'none';
            $bgElement.css('background-image', background);            
        });
        
    })(jQuery);
    
    $.fn.applySearchFilter();
    $('.sidebar').on('click', '#narrow-by-list dt', function(e) {
        $(this).toggleClass('closed');
        if ($(this).hasClass('closed')) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideDown();
        }
    });
    $('[data-mc]').matchHeight();  
    
    $('body').fragmentLoader('.layered-nav a, .category-products .toolbar a', {
        fragments: ['content', 'mana.catalog.leftnav'],
        beforeSend: function(event, bla) {
            $('<div class="loading-mask">').appendTo($('#content, .layered-nav'));
        },
        success: function(xhr) {
            $.fn.applySearchFilter();
            $('.loading-mask').remove();
            $('body').animate({ 
                scrollTop: 50
            }, 300, function() {
                $('[data-mc]').matchHeight();
            });
        }
    });
    
    $('#checkoutSteps').on('click', '#co-payment-form .sp-methods input:radio', function(e) {
        $('#co-payment-form .sp-methods li').removeClass('checked').addClass('disabled')
        if ($(this).is(':checked')) {
            $(this).closest('li').addClass('checked').removeClass('disabled');
            $('.payment-info').hide();
            $('#payment-info-' + $(this).val()).show();
        }
        
    }).on('click', '.shipping-methods input:radio', function(e) {
        $('.shipping-methods li li').addClass('disabled');
        if ($(this).is(':checked')) {
            $(this).closest('li').removeClass('disabled');
        }
    });
    
});

(function($) {
    var cache = {};
    $.fn.applySearchFilter = function() {        
        $('[data-filter-target]').each(function() {
            var target = $(this).data('filterTarget'),
                selector = '[data-filter-list="' + target + '"]';            
            $(this).fastLiveFilter(selector);
            if (cache.hasOwnProperty(target)) {
                $(this).val(cache[target]).trigger('change');
            }
            $(this).on('keyup', function(e) {
                cache[target] = $(this).val();                
            });
        });
    };
})(jQuery);

(function($) {
    
    $.fn.galleryZoom = function() {        
        var productId = $('.product-view').data('productId');
        $('.product-media a').attr('rel', productId).fancybox();          
        $('#image').elevateZoom();
    };
    
})(jQuery);


;(function ($, window, document, undefined) {

    "use strict";

    var self,
        pluginName = "fragmentLoader",
        cache = {},
        defaults = {
            fragments: [],
            beforeSend: function() {},
            success: function() {}
    };

    function Plugin(element, selector, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this.selector = selector;
        this._defaults = defaults;
        this._name = pluginName;
        self = this;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {            
            this.bindHistoryEvent();
            $(this.element).on('click', this.selector, function(e) {
                e.preventDefault();
                History.pushState({
                    type: 'loadFragments'
                }, $('title').text(), $(this).attr('href'));
            });
        },
        bindHistoryEvent: function() {
            History.Adapter.bind(window, 'statechange', function() {
                var state = History.getState();
                if (state.data.hasOwnProperty('type') && state.data.type === 'loadFragments') {
                    self.loadFragments(state);
                }
            });
        },
        loadFragments: function(state) {
            var fragments = this.settings.fragments;
            if (this.isCached(state.id)) {
                return self.applyBlocks(this.getCacheItem(state.id));
            }
            $.ajax({
                url: state.url,
                dataType: 'json',
                headers: {
                    'X-Fragment-Loader': 1,
                    'X-Fragments': fragments.join(',')
                },
                beforeSend: self.settings.beforeSend,
                success: function(response, status) {
                    self.applyBlocks(response);
                    self.setCacheItem(state.id, response);                    
                }
            });
        },
        applyBlocks: function(response) {
            for (var blockName in response) {
                $('[data-pjax-block="' + blockName + '"]').html(
                    $(response[blockName])
                );
            }
            self.settings.success(response, status);
        },
        setCacheItem: function(key, data) {
            cache[key] = data;
        },
        isCached: function(key) {
            return cache.hasOwnProperty(key);
        },
        getCacheItem: function(key) {
            return cache[key];
        }
    });

    $.fn[pluginName] = function (selector, options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, selector, options));
            }
        });
    };

})(jQuery, window, document);

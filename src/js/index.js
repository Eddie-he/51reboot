  // (function(){

  $(function(){

    // $($('.navbar-nav').find('li').get(0)).addClass('active')
      var slider = function(index, length, time){
        $('.slide-list').fadeOut(time);
        now = index % length;
        $($('.slide-list')[now]).fadeIn(time*2);
      };
      var iconChange = function(index){
        $('.slider-icons .icons').removeClass('action');
        $('.slider-icons .icons[value='+ index +']').addClass('action');
      };
      var setinterval = function(index,length,time){
        return setInterval(function(){
            index = (index + 1) % length;
            slider(index, length, time);
            iconChange(index);
          }
        ,5000);
      };
      window.onload = function(){
        var index = 0;
        var length = $('.slide-list').length; 
        var time = 1000;

        /* reset slide cursor to default if there is no .li-link */
        $('li.slide-list').each(function(idx, el) {
          if ($('a.li-link', el).length <= 0) {
            $(el).css('cursor', 'default');
          }
        });

        if(length > 1){
          var interval = setinterval(index,length,time);

          $('.slider-icons .icons').each(function(idx, el){

            $(this).click(function(){
              if($(this).hasClass('action')){
                return;
              }
              index = $(this).attr('value');
              slider(index,length,time);
              iconChange(index);
              clearInterval(interval);
              interval = setinterval(index, length, time);
            });
          });

          $('li.slide-list').on('click', function(e) {
            var el_a, el_slide, el_target;
            el_target = $(e.target);
            if (!$(el_target).hasClass('slide-list') && $(el_target).prop('tagName') !== 'A') {
              el_slide = $(el_target).parents('.slide-list');
              el_a = $('a.li-link', el_slide).eq(0);
              href = $(el_a).attr('href');
              if (href) {
                window.location.href = href;
              }
            }
          });
        }
      };


  var getQueryVariable, _ref, _ref1, getLoginDialog, sendLog;

  $(".navbar-toggle").click(function() {
    $(".navbar-collapse.collapse").toggle("in");
  });

  getQueryVariable = function(variable) {
    var i, pair, query, vars;
    variable = variable.toLowerCase();
    query = window.location.search.substring(1) + window.location.hash;
    vars = query.split("&");
    i = 0;
    while (i < vars.length) {
      pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
      i++;
    }
  };

    // })();
  })

// (function() {


// }).call(this);
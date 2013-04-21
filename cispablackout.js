/*!
 * cispablackout.js
 * http://github.com/thedod/cispablackout/
 *
 * Forked from SOPAstrikify.js
 * http://github.com/ianli/sopastrikify/
 *
 * Copyright 2012 Ian Li, http://ianli.com
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 */
((function(){
  var url = 'http://thedod.github.io/cispablackout/', /* FIX THIS if you install the script at your site */
      d = new Date(),
      day = d.getDate(),
      month = d.getMonth(),
      year = d.getFullYear();
  if (!(22 == day && 3 == month && 2013 == year))
    return;
  (function(window, document, version, callback) {

    var link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("href",url + "modal.css");
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);

    var j, d;
    var loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js";
        script.onload = script.onreadystatechange = function() {
            if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                callback((j = window.jQuery).noConflict(1), loaded = true);
                j(script).remove();
            }
        };
        document.documentElement.childNodes[0].appendChild(script)
    }

  })(window, document, "1.8", function($, jquery_loaded) {

    $(document).ready(function() {
      if($(window).width() < 658) return;
      
      $.ajax({
        url : url + 'modal-html.js',
        dataType : 'jsonp',
        jsonpCallback : 'dp',
        success : function(response){
          var modal  = response.html;
          var over = $('<div>').addClass('_dp_cispa_overlay').css({
            background : "url('"+url+"modal-over-bg.png')",
            zIndex : 9998,
            position : 'fixed',
            top : 0,
            left : 0,
            width: '100%',
            height: '100%'
          }).hide().click(function(ev){
            if($(ev.target).hasClass('_dp_cispa_overlay')){
             $(this).remove();
            }
          });

          var close = $('<a>').css({
            background : "url('"+url+"close.png')",
            width: 30,
            height: 30,
            position:'absolute',
            top: -15,
            right : -15,
            cursor : 'pointer'
          }).click(function(){
            over.remove();
          });

          $('body').prepend(over.fadeIn(function(){
            $(this).append(modal);
            var left = parseInt(($(window).width() - $('#dp_cispa_modal').width())/2);
            var top = 10;
            if(($(window).height() - $('#dp_cispa_modal').height() - top) > 0){
              top = parseInt(($(window).height() - $('#dp_cispa_modal').height())/3);
            }

            $('#dp_cispa_modal')
              .css({
                left : left,
                top : top
              })
              .append(close)
              .on('focus', 'input[type=text]', function(){
                if($(this).val() === $(this).attr('placeholder')) $(this).val('');
              })
              .on('blur', 'input[type=text]', function(){
                if($(this).val() === '') $(this).val($(this).attr('placeholder'));
              });
          }));
        }
      });
  	});
  });
})());



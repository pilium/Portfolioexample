(function ($) {
  'use strict';

  $(document).ready(function () {


    

        function blueasyMenu() {
          var $trigger = $('.trigger-nav'),
              $menu = $('.trigger-victim');

          $trigger.click(function() {
            $(this).next($menu).slideToggle(700);
          });

          $(window).resize(function() {
            if ( $(window).width() > 992 ) {
              $menu.removeAttr('style');
            }
          });
        }
        blueasyMenu();

      }); //end blueasyMenu

    }(jQuery));

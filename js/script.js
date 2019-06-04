(function ($) {
    'use strict';


 $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });
 })(jQuery);
/*
Author : Manbendra Satpathy
Created Date : 27 December 2023
Updated Date : 07 January 2023
Description : Custom Javascript
*/
(function ($) {

  "use strict";


  $('.navbar-collapse a').on('click', function () {
     $(".navbar-collapse").collapse('hide');
  });


  $('.smoothscroll').click(function () {
     var el = $(this).attr('href');
     var elWrapped = $(el);
     var header_height = $('.navbar').height();

     scrollToDiv(elWrapped, header_height);
     return false;

     function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;

        $('body,html').animate({
           scrollTop: totalScroll
        }, 300);
     }
  });

})(window.jQuery);
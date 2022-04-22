$(document).ready(function() {

  $(window).scroll(function() {

      var height = $('.container').height();
      var scrollTop = $(window).scrollTop();

      if (scrollTop >= height - 40) {
          $('.navbrans').addClass('solid-nav');
      } else {
          $('.navbrans').removeClass('solid-nav');
      }

  });
});
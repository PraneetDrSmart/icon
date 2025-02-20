$(document).ready(function() {
  // Show or hide the "scroll to top" button based on scroll position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroll-to-top').fadeIn();
    } else {
      $('#scroll-to-top').fadeOut();
    }
  });

  // Scroll to the top of the page when the button is clicked
  $('#scroll-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});

$(function() {
    $('#hero-text-invite').hover(function() {
      $('#stories-hero-overlay').css('background-color', 'yellow');
    }, function() {
      // on mouseout, reset the background colour
      $('#stories-hero-overlay').css('background-color', 'black');
    });
  });
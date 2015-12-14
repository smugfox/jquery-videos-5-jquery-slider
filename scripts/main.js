'use strict';
// every 1000ms it'll fire this function off
// var myInterval = setInterval(function() {
//   console.log(new Date());
// }, 1000);

// Callback will do something once the animation is complete
// $(selector).animate(ob, time, callback);
// $('#slider .slides').animate({'margin-left': -720}, 1000);


// setInterval
  // animate margin-left
  // if it's last slide, go to position 1 (0px)

// listen for mouseenter and leave
// resume on mouseleave

$(document).ready(function(){
  // configuration
  var width = 800;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  // cache the DOM
  // Only have to search through DOM once because of these variables.
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides'); //find .slides inside #slider
  var $slide = $slideContainer.find('.slide');
  var interval; // have to define interval outside of function so you can access it outside. Scope.

  function startSlider() {
    interval = setInterval(function() {
    $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
      currentSlide++;
      // if currentSlide is equal to the slide count of 6
      if (currentSlide === $slide.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
    }, pause);
  }

  function pauseSlider() {
    clearInterval(interval);
  }


  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

  startSlider();
});

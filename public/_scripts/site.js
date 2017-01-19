$(function() {

  var breakMobile = 730; // viewport px breakpoint

  fixedHeader = function() {
    var viewportWidth = $( window ).width(),
        fixedClass = 'navigation--fixed-top',
        $navElement = $(".navigation");

    if ($(window).scrollTop() > '1' && viewportWidth >= breakMobile) {
      $navElement.addClass(fixedClass);
    } else {
      $navElement.removeClass(fixedClass);
    }
  };

  // Toggle mobile navigation
  $(".navigation__mobile-menu__toggle").click(function() {
    $(this).parent().toggleClass('is-open');
  });

  // Force close mobile navigation when clicking anywhere (except the toggle button itself)
  $( document ).on('mousedown touchstart', function(event) {
    if (!$(event.target).closest(".navigation").length) {
      $(".navigation.is-open").removeClass('is-open');
    }
  });

  $(window).on('resize scroll', fixedHeader);

});

/* parallax from codepen.io/anon/pen/qarQwq#anon-signup*/
$(document).ready(function() {
  var wHeight = $(window).height();

  function parallax() {
    var pHeight = $(this).outerHeight();
    var pMiddle = pHeight / 2;
    var wMiddle = wHeight / 2;
    var fromTop = $(this).offset().top;
    var scrolled = $(window).scrollTop();
    var speed = $(this).attr('data-parallax-speed');
    var rangeA = (fromTop - wHeight);
    var rangeB = (fromTop + pHeight);
    var rangeC = (fromTop - wHeight);
    var rangeD = (pMiddle + fromTop) - (wMiddle + (wMiddle / 2));

    if (rangeA < 0) {
      rangeA = 0;
      rangeB = wHeight
    }

    var percent = (scrolled - rangeA) / (rangeB - rangeA);
    percent = percent * 100;
    percent = percent * speed;
    percent = percent.toFixed(2);

    var animFromBottom = (scrolled - rangeC) / (rangeD - rangeC);
    animFromBottom = animFromBottom.toFixed(2);

    if (animFromBottom >= 1) {
      animFromBottom = 1;
    }

    $(this).css('background-position', 'center ' + percent + '%');
    $(this).find('.parallax-content').css('opacity', animFromBottom);
    $(this).find('.parallax-content').css('transform', 'scale(' + animFromBottom + ')');
  }
  $('.parallax').each(parallax);
  $(window).scroll(function(e) {
    $('.parallax').each(parallax);
  });
});

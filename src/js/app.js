function _(selector) {
  return document.querySelector(selector);
}

window.onload = function() {

  _('body')
    .classList.remove('not-loaded');

  var doc = document.documentElement,
    body = document.body,
    nav = _('.header-nav'),
    navOffset = nav.offsetTop,
    navHeight = nav.offsetHeight;

  var floatingNav = _('.floating-nav');

  function scrollyThing() {
    var scrolled = (doc && doc.scrollTop || body && body.scrollTop || 0);

    if (scrolled >= navOffset) {
      if (!floatingNav.classList.contains('nav-fixed')) {
        floatingNav.classList.add('nav-fixed');
        nav.classList.add('nav-hide');
      }
    }
    if (scrolled < navOffset) {
      floatingNav.classList.remove('nav-fixed');
      nav.classList.remove('nav-hide');
    }
  }

  window.onresize = function() {
    navOffset = nav.offsetTop;
  };

  window.onscroll = function() {
    scrollyThing();
  };

  // Image slider
  image_slider = new Swipe(_('.image-slider'), {
    speed: 400,
    auto: 4000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false
  });

  _('.swipe-controls .control--left')
    .addEventListener('click', image_slider.prev);
  _('.swipe-controls .control--right')
    .addEventListener('click', image_slider.next);

  // Testimonials slider

  function resizeSlider() {
    var currentPos = testimonial_slider.getPos(),
      currentHeight = document.querySelectorAll('.testimonial-slider .swipe-wrap div')[currentPos].offsetHeight,
      wrapper = _('.testimonial-slider .swipe-wrap');
    wrapper.style.height = currentHeight + 'px';

    _('.swipe-controls--testimonial .counter')
      .textContent = (testimonial_slider.getPos() + 1) + '/' + testimonial_slider.getNumSlides();

  }

  testimonial_slider = new Swipe(_('.testimonial-slider'), {
    speed: 400,
    continuous: false,
    disableScroll: false,
    stopPropagation: false,
    callback: resizeSlider
  });

  _('.swipe-controls--testimonial .control--left')
    .addEventListener('click', testimonial_slider.prev);
  _('.swipe-controls--testimonial .control--right')
    .addEventListener('click', testimonial_slider.next);

  resizeSlider();

};
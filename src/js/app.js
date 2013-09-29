window.onload = function() {

  document.querySelector('body').classList.remove('not-loaded');

  var doc = document.documentElement,
      body = document.body,
      nav = document.querySelector('.header-nav'),
      navOffset = nav.offsetTop,
      navHeight = nav.offsetHeight;

  var floatingNav = document.querySelector('.floating-nav');

  function scrollyThing() {
    var scrolled = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

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

  window.onresize = function(){
      navOffset = nav.offsetTop;
  };

  window.onscroll = function() {
    scrollyThing();
  };

  // Image slider
  image_slider = new Swipe(document.querySelector('.image-slider'), {
    speed: 400,
    auto: 4000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false
  });

  document.querySelector('.control--left')
    .addEventListener('click', image_slider.prev);
  document.querySelector('.control--right')
    .addEventListener('click', image_slider.next);

  // Testimonials slider

  function resizeSlider() {
    var currentPos = testimonial_slider.getPos(),
      currentHeight = document.querySelectorAll('.testimonial-slider .swipe-wrap div')[currentPos].offsetHeight,
      wrapper = document.querySelector('.testimonial-slider .swipe-wrap');
      wrapper.style.height = currentHeight + 'px';
  }

  testimonial_slider = new Swipe(document.querySelector('.testimonial-slider'), {
    speed: 400,
    auto: 4000,
    continuous: false,
    disableScroll: false,
    stopPropagation: false,
    callback: resizeSlider
  });

  resizeSlider();

};
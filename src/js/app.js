window.onload = function() {

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

  // Swipejs slider
  slider = new Swipe(document.querySelector('.swipe'), {
    speed: 400,
    auto: 4000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false
  });

  document.querySelector('.control--left')
    .addEventListener('click', slider.prev);
  document.querySelector('.control--right')
    .addEventListener('click', slider.next);


};
window.onload = function() {
  document.querySelector('.toggle')
    .addEventListener('click', function() {
      document.querySelector('.toggleable')
        .classList.toggle('active');

    });

  // Swipejs slider
  slider = new Swipe(document.querySelector('.swipe'), {
    startSlide: Math.ceil(Math.random() * 8),
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
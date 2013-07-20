window.onload = function() {

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
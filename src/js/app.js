var bodyFontSize = 16; // Define the body font-size of your browser
var d; // Just to define this before the document is ready...


window.onload = function(){
    d = document.createElement('div'); // Create a div

    d.classList.add('widthCalculator'); // Add a class of 'widthCalculator' to the element, so we can target it with CSS

    document.body.appendChild(d); // Now attach it to the document body

    function toEms(width) {
        d.innerHTML = Math.round(width / bodyFontSize) + 'em';
    }


    var width = document.body.offsetWidth;

    toEms(width);

    window.onresize = function(){
        width = document.body.offsetWidth;
        toEms(width);
    };


    // Swipejs slider
    slider = new Swipe(document.querySelector('.swipe'), {
      speed: 400,
      auto: 3000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false
    });

    document.querySelector('.control--left').addEventListener('click', slider.prev);
    document.querySelector('.control--right').addEventListener('click', slider.next);


};
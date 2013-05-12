var d;
window.onload = function(){
    d = document.createElement('div');

    d.classList.add('widthCalculator');

    document.body.appendChild(d);

    function toEms(width) {
        d.innerHTML = Math.round(width / 16) + 'em';
    }


    var width = document.body.offsetWidth;

    toEms(width);

    window.onresize = function(){
        width = document.body.offsetWidth;
        toEms(width);
    };
};


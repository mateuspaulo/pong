var width     = 750;
var height    = 350;
var heightBar = parseInt(height/4);
var widthBar  = 10;

var ball   = new Ball(50, 50, 5, 2, 22);
var lbar   = new Bar(3,                (height/2)-(heightBar/2), widthBar, heightBar);
var rbar   = new Bar(width - widthBar - 3, (height/2)-(heightBar/2), widthBar, heightBar);

function draw() {
    document.getElementById('container').style.width      = width + 'px';
    document.getElementById('container').style.height     = height + 'px';
    document.getElementById('container').style.marginLeft = (width/-2) + 'px';
    document.getElementById('container').style.marginTop  = (height/-2) + 'px';

    ball.update();
}

setInterval(draw, 20);
var ball   = new Ball(50, 50, 5, 2, 22);
var width  = 750;
var height = 350;

function draw() {
    document.getElementById('container').style.width      = width + 'px';
    document.getElementById('container').style.height     = height + 'px';
    document.getElementById('container').style.marginLeft = (width/-2) + 'px';
    document.getElementById('container').style.marginTop  = (height/-2) + 'px';

    ball.update();
}

setInterval(draw, 20);
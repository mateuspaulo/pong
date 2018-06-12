var width     = 750;
var height    = 350;
var heightBar = parseInt(height/4);
var widthBar  = 10;
var ballWidth = 22;

var ball = new Ball(widthBar, (height/2)-(ballWidth/2), 5, 2, ballWidth);
var lbar = new Bar(3,(height/2)-(heightBar/2), widthBar, heightBar,'lbar');
var rbar = new Bar(width - widthBar - 3, (height/2)-(heightBar/2), widthBar, heightBar,'rbar');

function draw() {
    document.getElementById('container').style.width      = width + 'px';
    document.getElementById('container').style.height     = height + 'px';
    document.getElementById('container').style.marginLeft = (width/-2) + 'px';
    document.getElementById('container').style.marginTop  = (height/-2) + 'px';

    ball.update();
}

setInterval(draw, 20);

document.body.onkeydown = function() {
	var e = event.keyCode;

    if (e == 40) { //Arrow down 
        document.getElementById("rbar").style.top = (parseInt(document.getElementById("rbar").style.top)) + 10 + "px";
    } else if (e == 38) { //Arrow up
        document.getElementById("rbar").style.top = (parseInt(document.getElementById("rbar").style.top))  - 10 + "px";
    } else if (e == 87) { //W key
    	document.getElementById("lbar").style.top = (parseInt(document.getElementById("lbar").style.top)) - 10 + "px";
    } else if (e == 83) { //S key
    	document.getElementById("lbar").style.top = (parseInt(document.getElementById("lbar").style.top)) + 10 + "px";
    }
}

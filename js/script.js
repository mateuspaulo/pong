var width     = 750;
var height    = 350;
var heightBar = parseInt(height/4);
var widthBar  = 10;
var ballWidth = 22;
var teclas    = [];

var ball = new Ball(widthBar, (height/2)-(ballWidth/2), 5, 2, ballWidth);
var lbar = new Bar(3,(height/2)-(heightBar/2), widthBar, heightBar,'lbar');
var rbar = new Bar(width - widthBar - 3, (height/2)-(heightBar/2), widthBar, heightBar,'rbar');

function draw() {
    document.getElementById('container').style.width      = width + 'px';
    document.getElementById('container').style.height     = height + 'px';
    document.getElementById('container').style.marginLeft = (width/-2) + 'px';
    document.getElementById('container').style.marginTop  = (height/-2) + 'px';

    ball.update();

    if (teclas.indexOf(83) != -1) { // Key S
    	lbar.y += heightBar/25;
    	if (lbar.y > height - heightBar - 3) {
    		lbar.y = height - heightBar - 3;
    	}
    }

    if (teclas.indexOf(87) != -1) { // Key W
    	lbar.y -= heightBar/25;
    	if (lbar.y < 3) {
    		lbar.y = 3;
    	}
    }

    if (teclas.indexOf(40) != -1) { // Key Down
    	rbar.y += heightBar/25;
    	if (rbar.y > height - heightBar - 3) {
    		rbar.y = height - heightBar - 3;
    	}
    }

    if (teclas.indexOf(38) != -1) { // Key Up
    	rbar.y -= heightBar/25;
    	if (rbar.y < 3) {
    		rbar.y = 3;
    	}
    }

    lbar.show();
    rbar.show();
}

setInterval(draw, 20);

window.onkeydown = function(e) {
    if (teclas.indexOf(e.keyCode) == -1) {
        teclas.push(e.keyCode);
    }
}
window.onkeyup = function(e) {
    if (teclas.indexOf(e.keyCode) != -1) {
        teclas.splice(teclas.indexOf(e.keyCode), 1);
    }
}
var width       = 750;
var height      = 350;
var heightBar   = parseInt(height/4);
var widthBar    = 10;
var ballWidth   = 22;
var keys        = [];
var leftScore   = 0;
var heightScore = 0;

var ball = new Ball(widthBar, (height/2)-(ballWidth/2), 5, 2, ballWidth);
var lbar = new Bar(3,(height/2)-(heightBar/2), widthBar, heightBar,'lbar');
var rbar = new Bar(width - widthBar - 3, (height/2)-(heightBar/2), widthBar, heightBar,'rbar');

function draw() {
    if (ball.remove) return;

    document.getElementById('container').style.width      = width + 'px';
    document.getElementById('container').style.height     = height + 'px';
    document.getElementById('container').style.marginLeft = (width/-2) + 'px';
    document.getElementById('container').style.marginTop  = (height/-2) + 'px';

    ball.update();

    //Score
    if (ball.x > 725.0) {
        countScore("right");
    } 

    if (ball.x < 2.36) {
        countScore("left");
    }

    if (keys.indexOf(83) != -1) { // Key S
        lbar.y += heightBar/25;
        if (lbar.y > height - heightBar - 3) {
            lbar.y = height - heightBar - 3;
        }
    }

    if (keys.indexOf(87) != -1) { // Key W
        lbar.y -= heightBar/25;
        if (lbar.y < 3) {
            lbar.y = 3;
        }
    }

    if (keys.indexOf(40) != -1) { // Key Down
        rbar.y += heightBar/25;
        if (rbar.y > height - heightBar - 3) {
            rbar.y = height - heightBar - 3;
        }
    }

    if (keys.indexOf(38) != -1) { // Key Up
        rbar.y -= heightBar/25;
        if (rbar.y < 3) {
            rbar.y = 3;
        }
    }

    if (ball.x + ball.speedX <= lbar.x + lbar.w
        && lbar.y <= ball.y
        && lbar.y + lbar.h >= ball.y) {

        ball.reverseX();
        ball.x = lbar.x + lbar.w;
    }
    if (ball.x + ball.speedX + ball.raio >= rbar.x
        && rbar.y <= ball.y
        && rbar.y + rbar.h >= ball.y) {

        ball.reverseX();
        ball.x = rbar.x - ball.raio;
    }

    lbar.show();
    rbar.show();
}

setInterval(draw, 20);

window.onkeydown = function(e) {
    if (keys.indexOf(e.keyCode) == -1) {
        keys.push(e.keyCode);
    }
}

window.onkeyup = function(e) {
    if (keys.indexOf(e.keyCode) != -1) {
        keys.splice(keys.indexOf(e.keyCode), 1);
    }
}

function countScore(score) {

    if (score == "left") {
        heightScore++;
        document.getElementById("rightScore").textContent=heightScore++;
        ball.reverseX();
    } else if(score == "right") {
        leftScore++;
        document.getElementById("leftScore").textContent=leftScore;
        ball.reverseX();
    }

    ball.update();
}
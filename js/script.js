var width       = 750;
var height      = 350;
var heightBar   = parseInt(height/4);
var widthBar    = 10;
var ballWidth   = 22;
var keys        = [];
var leftScore   = 0;
var rightScore  = 0;

var iniDirX = Math.floor((Math.random() * 2) + 1) == 1 ? 1 : -1;
var iniDirY = Math.floor((Math.random() * 2) + 1) == 1 ? 1 : -1;
var iniSpeedX = (Math.random() * 5) + 2;
var iniSpeedY = (Math.random() * 5) + 1;

var balls = [];
balls[0]  = new Ball(width/2, (height/2)-(ballWidth/2), iniDirX * iniSpeedX, iniDirY * iniSpeedY, ballWidth);
var lbar  = new Bar(3,(height/2)-(heightBar/2), widthBar, heightBar,'lbar');
var rbar  = new Bar(width - widthBar - 3, (height/2)-(heightBar/2), widthBar, heightBar,'rbar');

function draw() {
    document.getElementById('container').style.width      = width + 'px';
    document.getElementById('container').style.height     = height + 'px';
    document.getElementById('container').style.marginLeft = (width/-2) + 'px';
    document.getElementById('container').style.marginTop  = (height/-2) + 'px';

    for (var i = 0; i < balls.length; i++) {
        balls[i].update();

        if (balls[i].duplicate) {
            let xVariancy = 1 - (Math.floor(Math.random() *10 + 1) / 20);
            let yVariancy = 1 - (Math.floor(Math.random() *10 + 1) / 20);
            balls.push(new Ball(balls[i].x, balls[i].y, balls[i].speedX * xVariancy, balls[i].speedY * -yVariancy, ballWidth));
            balls[i].duplicate = false;
        }

        if (balls[i].remove) {
            //Score
            if (balls[i].x < width/2) {
                countScore("left");
            } else {
                countScore("right");
            }

            balls[i].element.remove();
            balls.splice(i, 1);
        }
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

    for (var i = 0; i < balls.length; i++) {
        if (balls[i].x + balls[i].speedX <= lbar.x + lbar.w
            && lbar.y <= balls[i].y + balls[i].raio
            && lbar.y + lbar.h >= balls[i].y) {

            balls[i].reverseX();
            balls[i].x = lbar.x + lbar.w;
        }
        if (balls[i].x + balls[i].speedX + balls[i].raio >= rbar.x
            && rbar.y <= balls[i].y + balls[i].raio
            && rbar.y + rbar.h >= balls[i].y) {

            balls[i].reverseX();
            balls[i].x = rbar.x - balls[i].raio;
        }
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
        rightScore++;
        document.getElementById("rightScore").textContent = rightScore;
    } else if(score == "right") {
        leftScore++;
        document.getElementById("leftScore").textContent = leftScore;
    }

}
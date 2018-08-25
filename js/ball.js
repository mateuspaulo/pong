class Ball {

    constructor(x, y, speedX, speedY, raio) {

        //Get randon color
        this.letters = '0123456789ABCDEF';
        this.color   = '#';

        for (this.i = 0; this.i < 6; this.i++) {
            this.color += this.letters[Math.floor(Math.random() * 16)];
        }

        this.x      = x;
        this.y      = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.raio  = raio;
        this.idEl  = 'ball_' + new Date().getTime();

        this.element = document.createElement('div');

        this.element.setAttribute('id', this.idEl)
        this.element.setAttribute('class', 'ball');

        this.element.style.width  = this.raio + 'px';
        this.element.style.height = this.raio + 'px';
        this.element.style.left   = this.x + 'px';
        this.element.style.top    = this.y + 'px';
        this.element.style.backgroundColor = this.color;
        this.element.style.border = "2px solid #fff";

        this.remove      = false;
        this.batidas     = 0;
        this.duplicate   = false;
        this.dificuldade = 8;

        document.getElementById('container').appendChild(this.element);
    }

    update() {

        if (this.speedX >= width/12) {
            this.speedX = width/12;
        } else if (this.speedX <= -width/12) {
            this.speedX = -width/12;
        } else {
            this.speedX *= 1.0009;
        }

        if (this.speedY >= height/12) {
            this.speedY = height/12;
        } else if (this.speedY <= -height/12) {
            this.speedY = -height/12;
        } else {
            this.speedY *= 1.0009;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x >= width - this.raio) {
            this.speedX *= -1;
            this.x = width - this.raio;
            this.remove = true;
        }

        if (this.y >= height - this.raio) {
            this.speedY *= -1;
            this.y = height - this.raio;
        }

        if (this.x <= 0) {
            this.speedX *= -1;
            this.x = 0;
            this.remove = true;
        }

        if (this.y <= 0) {
            this.speedY *= -1;
            this.y = 0;
        }

        this.element.style.left   = this.x + 'px';
        this.element.style.top    = this.y + 'px';
    }

    reverseX() {
        this.speedX *= -1;
        this.batidas++;
        this.duplicate = Math.floor((Math.random() * this.dificuldade) + 1) == 1;

        if (this.dificuldade > 5) {
            this.dificuldade--;
        }
    }
}
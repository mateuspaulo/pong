class Ball {

    constructor(x, y, speedX, speedY, raio) {
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
        this.element.style.backgroundColor = 'red';

        this.remove = false;

        document.getElementById('container').appendChild(this.element);
    }

    update() {

        if (this.speedX >= width/12) {
            this.speedX = width/12;
        } else if (this.speedX <= -width/12) {
            this.speedX = -width/12;
        } else {
            this.speedX *= 1.0003;
        }

        if (this.speedY >= height/12) {
            this.speedY = height/12;
        } else if (this.speedY <= -height/12) {
            this.speedY = -height/12;
        } else {
            this.speedY *= 1.0003;
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
    }
}
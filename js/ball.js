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

        document.getElementById('container').appendChild(this.element);
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        this.element.style.left   = this.x + 'px';
        this.element.style.top    = this.y + 'px';

        if (this.x >= width - this.raio) {
            this.speedX *= -1;
        }

        if (this.y >= height - this.raio) {
            this.speedY *= -1;
        }

        if (this.x <= 0) {
            this.speedX *= -1;
        }

        if (this.y <= 0) {
            this.speedY *= -1;
        }
    }
}
class Bar {

    constructor(x, y, width, height, id) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;

        this.element = document.createElement('div');

        this.element.setAttribute('id', id)
        this.element.setAttribute('class', 'bar');

        this.element.style.width  = this.w + 'px';
        this.element.style.height = this.h + 'px';
        this.element.style.left   = this.x + 'px';
        this.element.style.top    = this.y + 'px';
        this.element.style.backgroundColor = 'white';

        document.getElementById('container').appendChild(this.element);
    }
    
    show() {
        this.element.style.top = this.y + 'px';
	}
}
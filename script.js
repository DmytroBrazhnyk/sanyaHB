class MovingElement {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('moving-element');
        document.body.appendChild(this.element);

        this.element.style.left = Math.random() * (window.innerWidth - 50) + 'px';
        this.element.style.top = Math.random() * (window.innerHeight - 50) + 'px';

        this.directionX = 1;
        this.directionY = 1;

        setInterval(() => this.moveElement(), 70 / 5); // Рух кожні 200 мілісекунд (5 пікселів в секунду)
    }

    moveElement() {
        const rect = this.element.getBoundingClientRect();

        if (rect.left <= 0 || rect.right >= window.innerWidth) {
            this.directionX *= -1;
        }

        if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
            this.directionY *= -1;
        }

        this.element.style.left = rect.left + 1 * this.directionX + 'px';
        this.element.style.top = rect.top + 1 * this.directionY + 'px';
    }
}

new MovingElement();
new MovingElement();
new MovingElement();
new MovingElement();
new MovingElement();
new MovingElement();
new MovingElement();
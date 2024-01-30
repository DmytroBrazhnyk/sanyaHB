class MovingElement {
    constructor() {
        this.element = document.createElement('div');
        this.element.innerHTML=`
        <h2>Саня</h2>
        <h2 class = "big_word">ХУЙ</h2>
        <h2>соси</h2>
    `;
        this.element.classList.add('moving-element');
        document.body.appendChild(this.element);

        this.element.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        this.element.style.top = Math.random() * (window.innerHeight - 200) + 'px';

        this.directionX = this.getRandomDirection();
        this.directionY = this.getRandomDirection();

        setInterval(() => this.moveElement(), 50 / 7); 
        setInterval(() => this.randomizeBg(), 80); 
    }

    randomizeBg(){
        const colorfulObject = {
            1: 'red',
            2: 'orange',
            3: 'yellow',
            4: 'green',
            5: 'pink',      
            6: 'purple',
            7: '#ff00ff',   
            8: '#00ffff',   
            9: 'lightgreen', 
            10: 'yellowgreen'
        };

        const randomKey = Math.floor(Math.random() * 10) + 1;
        const randomColor = colorfulObject[randomKey];
        this.element.style.backgroundColor = randomColor;
    }
    getRandomDirection() {
        const randomNumber = Math.floor(Math.random() * 100) + 1; 
    
        if (randomNumber < 50) {
            return 1;
        } else {
            return -1;
        }
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

setInterval(() =>new MovingElement(), 2000 / 3);

window.addEventListener("click", (event)=> new MovingElement());
window.addEventListener('beforeunload', () =>{
    const url = 'https://dmytrobrazhnyk.github.io/sanyaHB/';
    const newWindow = window.open(url, '_blank');
})

function randomizeTextColor() {
    const colorfulObject = {
        1: 'red',
        2: 'orange',
        3: 'yellow',
        4: 'green',
        5: 'pink',      
        6: 'purple',
        7: '#ff00ff',   
        8: '#00ffff',   
        9: 'lightgreen', 
        10: 'yellowgreen'
    };

    const randomKey = Math.floor(Math.random() * 10) + 1;
    const randomColor = colorfulObject[randomKey];
    document.body.style.color = randomColor;
}
setInterval(() => randomizeTextColor(), 200);
// new MovingElement();
// new MovingElement();
// new MovingElement();
// new MovingElement();
// new MovingElement();
// new MovingElement();
// new MovingElement();
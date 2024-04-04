(() => {
    // YOUR CODE HERE
})();

// 6.1 //////////////////////////////////////////
class Circle {
    constructor(xPos,yPos,radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset,yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    changeRadius(r) {
        this.radius=r;
    }

    get surface() {
        return Math.PI*(this.radius*this.radius);
    }
}

const parent=document.querySelector('#circle');
const surface=document.querySelector('#surface');
const x=document.querySelector('#xOffset').value;
const y=document.querySelector('#yOffset').value;
const r=document.querySelector('#radius').value;
    
const circle = new Circle(x,y,r);

const circleView = document.createElement('div');
circleView.classList.add('circle');
parent.appendChild(circleView);

circleView.style.width=circle.radius*2+'px';
circleView.style.height=circle.radius*2+'px';
circleView.style.top=circle.xPos+'px';
circleView.style.left=circle.yPos+'px';

surface.innerHTML=circle.surface.toFixed(2);

function radius() {
    const r=document.querySelector('#radius').value;
    console.log(r);
    circle.changeRadius(r);
    circleView.style.width=circle.radius*2+'px';
    circleView.style.height=circle.radius*2+'px';
    
    surface.innerHTML=circle.surface.toFixed(2);
}

function offset() {
    const x=document.querySelector('#xOffset').value;
    const y=document.querySelector('#yOffset').value;

    circle.xPos=x;
    circle.yPos=y;

    circleView.style.top=circle.xPos+'px';
    circleView.style.left=circle.yPos+'px';    
}

///// 6.2 ///////////////////////////////////

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, height) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.height = height;
    }

    setWidth(value) {
        this.width = value;
    }

    setHeight(value) {
        this.height = value;
    }

    collides(otherRectangle) {
        return this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
               this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
               this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.height &&
               this.topLeftYPos + this.height > otherRectangle.topLeftYPos;
    }
}

function getRandom(min,max) {
    return Math.random() * (max - min) + min;
}

const displayRectangle = document.querySelector('#displayRectangle');

function rectangles() {
    displayRectangle.innerHTML='';

    const rect1 = new Rectangle(getRandom(-10,200), getRandom(-10,200), getRandom(10,100), getRandom(10,100));
    const rect1View = document.createElement('div');
    rect1View.classList.add('rectangle', 'rectangle1');
    displayRectangle.appendChild(rect1View);
    rect1View.style.width = rect1.width + 'px';
    rect1View.style.height = rect1.height + 'px';
    rect1View.style.top = rect1.topLeftYPos + 'px';
    rect1View.style.left = rect1.topLeftXPos + 'px';

    const rect2 = new Rectangle(getRandom(-10,100), getRandom(-10,100), getRandom(10,100), getRandom(10,100));
    const rect2View = document.createElement('div');
    rect2View.classList.add('rectangle', 'rectangle2');
    displayRectangle.appendChild(rect2View);
    rect2View.style.width = rect2.width + 'px';
    rect2View.style.height = rect2.height + 'px';
    rect2View.style.top = rect2.topLeftYPos + 'px';
    rect2View.style.left = rect2.topLeftXPos + 'px';

    if(rect1.collides(rect2)) {
        rect1View.style.border="solid 1px red";
        rect2View.style.border="solid 1px red";
    }
}


// 6.3 ///////////////////////////////
const displayRectangleX1000 = document.querySelector('#displayRectangleX1000');

function rectanglesX1000() {

    let array=[];
    displayRectangleX1000.innerHTML='';

    for(let i=0; i<1000; i++) {
        const rect = new Rectangle(getRandom(0,700), getRandom(10,500), getRandom(2,15), getRandom(2,15));
        array.push(rect);
        
        const rectView = document.createElement('div');
        rectView.classList.add('rectangle', 'rectangle1');
        displayRectangleX1000.appendChild(rectView);
        rectView.style.width = rect.width + 'px';
        rectView.style.height = rect.height + 'px';
        rectView.style.top = rect.topLeftYPos + 'px';
        rectView.style.left = rect.topLeftXPos + 'px';

        for (let j = 0; j < i; j++) {
            if (rect.collides(array[j])) {
                rectView.style.border = "solid 1px red";
                displayRectangleX1000.childNodes[j].style.border = "solid 1px red";
            }
        }
    }
}


(() => {
    // YOUR CODE HERE
})();

function calcSurface() {
    const lenght=document.querySelector('#lenght').value;
    const width=document.querySelector('#width').value;
    const surface=lenght*width;
    document.querySelector('#display1').innerHTML=surface+'m²';
}

function rand10(multi) {
    const random=Math.floor(Math.random() * 10)+1;
    if(multi) {
        return random;
    } else {
        document.querySelector('#display2').innerHTML=random;
    }
}

function multiRand() {
    const arrayLength=document.querySelector('#arrayLength').value;
    let array=[];

    for(let i=0; i<arrayLength; i++) {
        array.push(rand10(true));
    }
    document.querySelector('#display3').innerHTML=array;
}

function pickLearner() {
    const students=["adca09","Adrien B","Angel","Arnaud VA","Denis L","Dorian","Dylan Feys","Dzheylyan","Giovanni Tummino","Iliess","Isabelle N","JessicaJCO","Julie","Justine F","Justine L","Ludovic L","Lyne","M.Jordan","Manu-cj","Maryam","Mohamed","Natalia","Sahra"];
    const length=students.length;
    console.log(lenght);
    const nb=document.querySelector('#nbOfStudents').value;
    let array=[];

    for(let i=0; i<nb; i++) {
        const random=Math.floor(Math.random() * length);
        array.push(students[random]);
        console.log(random);
    }

    document.querySelector('#display4').innerHTML=array;
}

function calcDistance() {
    //on récupère les inputs en précisant que ce sont des nombres flottants
    const xA=parseFloat(document.querySelector('#xA').value);
    const yA=parseFloat(document.querySelector('#yA').value);
    const xB=parseFloat(document.querySelector('#xB').value);
    const yB=parseFloat(document.querySelector('#yB').value);

    //on calcul la distance en utilisant l hypotenuse en précisant 2 décimales max
    const pointA=xA-xB;
    const pointB=yA-yB;

    const distance=Math.hypot(pointA,pointB).toFixed(2);

    document.querySelector('#display5').innerHTML=distance;
}

function factorial(nb) {
    if(nb==0) {
        return 1;
    } else {
        return nb*factorial(nb-1);
    }
}

function factorialInput() {
    const nb=document.querySelector('#factorial').value;
    const display=document.querySelector('#display6');

    display.innerHTML=factorial(nb);
}
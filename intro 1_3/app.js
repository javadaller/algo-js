(() => {
    // YOUR CODE HERE
})();

function students() {
    const students=["adca09","Adrien B","Angel","Arnaud VA","Denis L","Dorian","Dylan Feys","Dzheylyan","Giovanni Tummino","Iliess","Isabelle N","JessicaJCO","Julie","Justine F","Justine L","Ludovic L","Lyne","M.Jordan","Manu-cj","Maryam","Mohamed","Natalia","Sahra"];
    const display=document.querySelector('#display1');

    for(let i=0; i<students.length; i++) {
        display.innerHTML+=students[i]+'<br>';
    }
}
students();

function addition() {
    const array=[1, 2, 3, 4, 5];
    const display=document.querySelector('#display2');
    let total=0;

    for(let i=0; i<array.length; i++) {
        total+=array[i];
    }
    display.innerHTML="Total du tableau: "+array.toString()+" ="+total;
}
addition();

function averageValue() {
    const display=document.querySelector('#display3');
    const array=[1,2,3,4,5,6,7,8];

    let total=0;

    for(let i=0; i<array.length; i++) {
        total+=array[i];
    }
    const average = total/array.length;

    display.innerHTML="The average value of this array: "+array.toString()+" = "+average;
}
averageValue();

function arrayCopy() {
    const display=document.querySelector('#display4');
    const display2=document.querySelector('#display5');
    const array=[1,2,3,4,5,6];
    let arrayCopy=[];

    for(let i=0; i<array.length; i++) {
        arrayCopy.push(array[i]);
    }

    const arrayCopy2=[...array];

    display.innerHTML='Copy of the array: '+arrayCopy.toString();
    display2.innerHTML='The same copy, but the easy way: '+arrayCopy2;
}
arrayCopy();

function minMax() {
    const display=document.querySelector('#display6');
    const array=[23,57,75,123,345,2,62,967];
    let min=array[0];
    let max=0;

    for(let i=0; i<array.length; i++) {
        if(array[i]<min) {
            min=array[i];
        } else if(array[i]>max) {
             max=array[i];
        }
    }
    display.innerHTML="Minimum: "+min+" Maximum: "+max;
}
minMax();
(() => {
    // YOUR CODE HERE
})();

function verifyAge() {
    const age = document.querySelector('#age').value;
    const display=document.querySelector('#adult');
    if(age>=18) {
        display.innerHTML="You are an adult!";
    } else {
        display.innerHTML="You are not yet an adult!";
    }
}

function minMax() {
    const min=document.querySelector('#min').value;
    const max=document.querySelector('#max').value;
    const current=document.querySelector('#current').value;
    const display=document.querySelector('#display2');

    if((min!=null)&&(max!=null)) {
        if(min > max) {
            display.innerHTML="Error. Your minimum is greater than the maximum... you idiot!";
            display.style.color='red';
        } else {
            if((current<max)&&(current>min)) {
                display.innerHTML="You are between minimum and maximum.";
                display.style.color='black';
            } else {
                display.innerHTML="You are not between minimum and maximum.";
                display.style.color='black';
            }
        }
    }
}

function evenNumbers() {
    const display1=document.querySelector('#evenWhile');
    const display2=document.querySelector('#evenFor');

    let nb=1;
    let array=[];

    while(nb!=101) {

        if(nb%2==0) {
            array.push(nb);
        }

        nb+=1;
    }
    display1.innerHTML=array;


    array=[];
    for(let i=1; i<101; i++) {
        if(i%2==0) {
            array.push(i);
            i++
        }
    }
    display2.innerHTML=array;
}
evenNumbers();

function evenOdd() {
    const display=document.querySelector('#display4');

    let array=[];

    for(let i=1; i<101; i++) {
        if(i%2==0) {
            array.push(i/2);
        } else {
            array.push(i*3);
        }
    }
    display.innerHTML=array;

}
evenOdd();

function favoriteNumber() {
    const nb=document.querySelector('#favorite').value;
    const display=document.querySelector('#display5');

    if(nb!=42) {
        display.innerHTML="Are you sure?";
    } else {
        display.innerHTML="YEAAA that's the number!!!";
    }
}

function dayNumber() {
    const nb=document.querySelector('#dayNb').value;
    const display=document.querySelector('#displayDayNb');
    const week=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    display.innerHTML=week[nb-1];
}

function numberN() {
    const nb=document.querySelector('#numberN').value;
    const display=document.querySelector('#display7');
    const display2=document.querySelector('#display8');
    display.innerHTML='';

    let total=0;

    for(let i=nb; i>0; i--) {
        if(i>1) {
            display.innerHTML+=i+' + '; 
        } else {
            display.innerHTML+=i;
        }
        
        total+=parseInt(i);
    }
    display2.innerHTML="Total = "+total;

}
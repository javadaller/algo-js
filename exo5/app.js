(() => {
    // YOUR CODE HERE
})();

let mySerie={};
let arrayCasting=[];
const bloc1=document.querySelector('#bloc1');
const bloc2=document.querySelector('#bloc2');
const bloc3=document.querySelector('#bloc3');
const displayCasting=document.querySelector('#displayCasting');
const nameDisplay=document.querySelector('#nameDisplay');
const yearDisplay=document.querySelector('#yearDisplay');
const castingDisplay=document.querySelector('#castingDisplay');

function resetCasting() {
    arrayCasting=[];
    displayCasting.innerHTML='';
}

function addCasting() {
    const name=document.querySelector('#casting').value;
    document.querySelector('#casting').value='';
    arrayCasting.push(name);
    displayCasting.innerHTML=arrayCasting;
    document.querySelector('#casting').focus();
}

function askTvSerie() {
    const name=document.querySelector('#name').value;
    const year=document.querySelector('#year').value;

    mySerie={
        "name" : name,
        "year" : year,
        "casting" : arrayCasting
    };

    nameDisplay.innerHTML='Name: '+mySerie.name;
    yearDisplay.innerHTML='Year: '+mySerie.year;
    castingDisplay.innerHTML='Casting: '+mySerie.casting;
    
    bloc1.style.display='none';
    bloc2.style.display='block';
}

function randomizedCast() {
    let shuffleCasting=mySerie.casting;
    shuffleCasting.sort(() => Math.random() -0.5);
    mySerie.casting=shuffleCasting;

    nameDisplay.innerHTML='Name: '+mySerie.name;
    yearDisplay.innerHTML='Year: '+mySerie.year;
    castingDisplay.innerHTML='Casting: '+mySerie.casting;

    bloc2.style.display='none';
    bloc3.style.display='block';
}

function newSerie() {
    mySerie.name=document.querySelector('#name2').value;
    mySerie.year=document.querySelector('#year2').value;

    nameDisplay.innerHTML='Name: '+mySerie.name;
    yearDisplay.innerHTML='Year: '+mySerie.year;

    if(mySerie.casting.length<2) {
        castingDisplay.innerHTML='Casting: '+mySerie.casting;
    } else {
        const nbActors= Math.floor(Math.random()*mySerie.casting.length)+1;
        let selectedActors=[];

        for(let i=0; i<nbActors; i++) {
            const index=Math.floor(Math.random()*mySerie.casting.length);
            selectedActors.push(mySerie.casting[index]);
        }

        mySerie.casting=selectedActors;
    }

    castingDisplay.innerHTML='Casting: '+mySerie.casting;

    bloc3.style.display='none';
}
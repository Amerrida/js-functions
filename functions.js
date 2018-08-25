//input=animal example fish
//output= animal product   example fish stix
//Below is the syntax


function nuggetizer(animal){ 

return `${animal} + stix`;
}


console.log ('fish:', nuggetizer ('fish'));
console.log ('cat:', nuggetizer ('cat'));   
console.log ('bear:', nuggetizer ('bear'));

const nuggtizer =(animal)=> {

};


const nuggetizer2= (animal) => {
    return`${animal} jerky`
};
console.log ('deer:',nuggetizer2('deer'));

const bearSticks =nuggetizer2('bear');


const nomnom = (person,food) => {
    return `${person} devoured ${food}`;

}
console.log (nomnom(`aftan`, bearSticks));


const printToDom =(stringToPrint,divId)=> {
const selectdDiv =document.getElementById (divId)
selectdDiv.innerHTML += stringToPrint;
};

//we will have this in every project we do for the next 2 months//


const numberadder = (x) => {
    const finalNumber = x + 3;
    printToDom(`<h2>${finalNumber}</h2>`,'allTheNumbers')
}

numberadder(22); //25
numberadder(2);// 5
numberadder(4);


printToDom(`I am ready for lunch`, `feelings`)
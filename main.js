const bananaDIV= document.getElementById('banana');
/* how to add to a dif below */
bananaDIV.innerHTML='ima banana';

let counter= 0;
counter = counter +1;
counter += 1
counter ++;

//counter =3

console.log('counter:', counter);


const firstName ='Aftan';
const lastName ='Walls';

greetingElement= document.getElementById ('greeting');
// greetingElement.innerHTML = 'Hello my  name is Aftan'+ firstName + ''+lastname;

greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

//object short hand notation

let name ='callan';
let age = '1000000000';
let person = {
    name: name,
    age: age,

}

console.log ('person:', person.name);

// let person ={
// name: name,
// age:age,
// };

let person = {name,age};
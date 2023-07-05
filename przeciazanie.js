function countItems(x){
    return x.length;
}

function sum(x=0,y=0,z=0){
    return x+y+z;
}

// function countItems(x){
//     return x.toString().length;
// }

function myFunction(x,y){
    if (typeof x === 'string' && typeof y === 'string'){
        return x + ' ' + y;
    }
    else if (typeof x === 'number' && typeof y === 'number'){
        return x + y;
    }
}

console.log(myFunction(1,2));
console.log(myFunction('Ala','ma kota'));


let MyC = {
    string: function(x,y){
        return x + ' ' + y;
    },
    number: function(x,y){
        return x + y;
}
}

console.log(MyC.string('Ala','ma kota'));
console.log(MyC.number(1,2));


function Stack(){
    this.stack = [];
    this.push = function(x){
        this.stack.push(x);
    }
    this.pop = function(){
        return this.stack.pop();
    }
}


function Person(){
    this.name = 'Jan';
    this.surname = 'Kowalski';
    this.age = 30;
    this.sayHello = function(){
        console.log('Hello');
    }
}

function Programmer(){
    this.language = '';
}

Programmer.prototype = new Person();

function writeFullName(p){
    console.log(p.name + ' ' + p.surname);
}

let a = new Person();
a.name = 'Jan';
a.surname = 'Kowalski';

let b = new Programmer();
b.name = 'Janina';
b.surname = 'Kowalska';
b.language = 'JavaScript';

writeFullName(a);
writeFullName(b);
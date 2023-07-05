// ES5
var result = function(a,b){
    return a+b;
}
console.log(result(1,2));

// ES6
const result = (a,b) => a+b;
console.log(result(1,2));

var self = this;

// ES5
function Counter(){
    var self = this;
    self.count = 0;
    
    setInterval(function(){
        self.count++;
        console.log(self.count);
    }, 1000);
}

var counter = new Counter();

// ES6
function Counter(){
    this.count = 0;
    
    setInterval(() => {
        this.count++;
        console.log(this.count);
    }, 1000);
}

var counter = new Counter();

// ES5
var counter = 0;
console.log(counter);

(function(){
    var counter = 5;
    console.log(counter);
})();
console.log(counter);

var i = 'global';

(function(){
    for (var i=0; i<5; i++){
        console.log(i);
    }
})();
console.log(i);

// ES6
let i = 'global';
for (let i=0; i<5; i++){
    console.log(i);
}
console.log(i);

const person = {
    name: 'John',
    surname: 'Doe',
}

person.city = 'London';
console.log(person);

const people = [{name:'John', surname:'Doe'}, {name:'Jane', surname:'Doe'}];
people.push({name:'Mary', surname:'Doe'});
console.log(people);

// person = {
//     name: 'John2',
//     surname: 'Doe2',
// }

// ES5
function Car(brand){
    this.brand = brand;
}

Car.prototype.getBrand = function(){
    return this.brand;
}

var car = new Car('Ford');
console.log(car.getBrand());

// ES6
class Car{
    constructor(brand){
        this.brand = brand;
    }
    
    getBrand(){
        return this.brand;
    }
}

const car = new Car('Ford');
console.log(car.getBrand());


class SportsCar extends Car{
    constructor(brand, hp){
        super(brand);
        this.hp = hp;
    }
    
    getHp(){
        return this.hp;
    }
}
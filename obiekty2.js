class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    printInfo(){
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}

console.log(typeof Person);

let person = new Person('Jan', 'Kowalski');
// let person2 = Person('Jan', 'Kowalski');

let Person2 = class{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.age = 0;
    }
    printInfo(){
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}

let person2 = new Person2('Jan', 'Kowalski');

class MyClass {
    constructor(){
        this.myMethod = () => {
            console.log('Hello');
        }
    }
}
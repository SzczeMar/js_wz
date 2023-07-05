let emptyObject = {};
let emptyObject2 = new Object();
// let person = {name: "Jan", surname: "Kowalski"};
let person = {name: "Jan", 
                surname: "Kowalski",
            address: {
                street: "Kwiatowa",
                city: "Gdańsk",
                country: "Polska"
}};

// let name = person.name;
let surname = person.surname;
let age = person.age;
person.age = 32;

let name = person["name"];
delete person.age;
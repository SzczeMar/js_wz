let emptyObject = {};
let emptyObject2 = new Object();
emptyObject2.name = "Jan";
emptyObject2.surname = "Kowalski";

// let person = {name: "Jan", surname: "Kowalski"};
let person = {name: "Jan", 
                surname: "Kowalski",
                showFullName() {
                    return this.name + " " + this.surname;
                },
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

function showFullName(){
    return this.name + " " + this.surname;
}

let show = person.showFullName();
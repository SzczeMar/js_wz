
// let company = {
//     name: 'CDV',
//     address: 'Gdańsk',
//     employees: [],
//     sortEmployeesByName: function(){...}
// };
class Company {
    constructor(name){
        let employees = [];
        this.name = name;
    }
        getEmployees(){
            return employees;
    }
        addEmployee(employee){
            employees.push(employee);
    }
        sortEmployeesByName(){  
            employees.sort((a, b) => {
                if(a.name > b.name){
                    return 1;
                }else if(a.name < b.name){
                    return -1;
                }else{
                    return 0;
                }
            });
}
}

let company = new Company('CDV');
company.addEmployee(person);
company.addEmployee(person2);
company.sortEmployeesByName();
console.log(company.getEmployees());




let person_komp = {
    name: 'Jan',
    surname: 'Kowalski',
    address: {
        street: 'Grunwaldzka',
        city: 'Gdańsk',
}}; // obiekt



class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.parent = null;
    }
    printInfo(){
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}

let person = new Person('Jan', 'Kowalski');
let person2 = new Person('Anna', 'Kowalska');

person2.parent = person;
// company.employees.push(person);
// company.employees.push(person2);



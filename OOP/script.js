//constructor methods----------------------------------------

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

}

const sena = new Person("Sena", 2020)
const orhan = new Person("Orhan", 2012)

console.log(sena) //Person {firstName: 'Sena', birthYear: 2020} yazdı
console.log(orhan);

// Person.prototype.calcAge = function() {
//     console.log(2022 - this.birthYear)
// }
// Person.prototype.species = 'Homo sapiens'
// sena.calcAge();
// orhan.calcAge();

// Person.prototype.species = 'Homo sapiens'
// console.log(sena.species)


class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        console.log(`${this.firstName +''+this.lastName}`);
    }
}

const ali = new Student("Ali", "Aktaş")
ali.getFullName()
console.log(ali)
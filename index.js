// // Değişkenler ( mutable  değiştirilebilir)
// var userName = 'Sena';
// console.log(userName);

// userName = 'Orhan'
// console.log(userName);

// // inmutable (değiştirilemez)

// const email = 'xyz@gmail.com'

// console.log(email);

// email = 'wer@gmail.com'

// console.log(email);
// hata verir 
//  -------------------------------------------------------------------------
// a = 8, b=3 yazdırma-----------------------------
// let a = 3;
// let b = 8;
// let c = a

// a = b;
// b = c;


// console.log(a, b);

// // ----------------------------------------------------
// // ----------Data Types-----------------------------------
// // -------1-String-----------------


// let name = "Orhan"
// console.log(typeof name);
// console.log(typeof 'true');

// // ------2.number----------------------------

// let x = 29

// console.log(typeof x);

// // ---------3.Boolean----------------

// console.log(typeof true);

// // --------4-undefined--------------

// let number;

// console.log(number);

// // ---------------5.null--------
// let email = null
// console.log(email);



// ----------------------------BASIC OPERATORS----------------------------------------------------

//  Aritmetik--------------

// let currentYear = 2021
// let age = currentYear - 1986

// console.log(age);

// let a = 3;
// let b = 5;

// let total = a + b;
// let totalValue = 5 + 8;

// console.log(total, totalValue);
// let x = 3 * 5;

// console.log(x);

// let y = 8 / 4;
// console.log(y);

// let expoment = 2 ** 3
// console.log(expoment);

// let mod = 10 % 3;
// console.log(mod);

// // "--" 1 azalt
// // "++" 1 artır
// let ab = 3;
// let xy = --ab

// console.log(ab, xy);
// çıktı 2,2


// let abc = 3;
// let xyz = abc--

//     console.log(xyz, abc);
// çıktı 3,2


// String birleştirme---------------------------------

// const firstName = "Jeff"
// const surName = "Scneider"

// console.log(firstName + " " + surName);

// Assigment operator---atama---------------------------------

// let val = true;
// let x = 2;

// x = x + 5

// console.log(x);

// x += 5

// console.log(x);
// // 12 yazdı

// let y = 10
// y /= 2

// console.log(y);
// // çıktı 5

// y += 4
// console.log(y);
// // çıktı 9



// Comparison ---karşılaştırma operatorler---------------

// let ageOrhan = 8
// let ageSena = 2

// console.log(ageOrhan > ageSena);
// // çıktı true

// console.log(ageSena > ageOrhan);
// // çıktı false

// console.log(ageOrhan == 8);
// // çıktı true

// console.log(ageOrhan == '8');
// // çıktı true

// console.log(ageOrhan !== '8');
// // true
// console.log(ageOrhan !== 8);
// // false

// Template Literal--------------------------

let fName = "Jeff"
let sName = "Schneider"
let work = "Amozon"

let sentence = "He is " + fName + ' ' + sName + ' and He is founder of ' + work + '.';

console.log(sentence);

let betterSentence = `He is ${fName} ${sName} and He is founder of ${work}.`
console.log(betterSentence);

console.log("I want to write this \n\
on new line")

console.log(`I want to write this \n\
on new line`)


// Conditionals--------------------------------

const currentAge = 15;

if (currentAge >= 18) {
    console.log("You can drive legally");
} else {
    console.log("You are not to drive")
}
// -----------------------------------

// const birthYear = 2001;

// if (birthYear >= 2000) {
//     let generation = "Z"
//     console.log(generation);
// } else if (birthYear < 2000) {
//     let generation = "Y"
//     console.log(generation);
// }

// yada-----------

const birthYear = 2001;

let generation;

if (birthYear >= 2000) {
    generation = "Z"

} else if (birthYear < 2000) {
    generation = "Y"

}

console.log(generation);
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

// const currentAge = 15;

// if (currentAge >= 18) {
//     console.log("You can drive legally");
// } else {
//     console.log("You are not to drive")
// }
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

// -----------------------------------

let grade = 80

if (grade >= 90) {

    let not = "AA"

    console.log(not);

} else if (grade <= 80) {

    let not = "BA"
    console.log(not);
} else {

    let not = "BB"
    console.log(not);
}

// TYPE CONVERSION AND TYPE COERCION-----------------------------

console.log(typeof "18");
console.log(typeof Number("18"));
console.log(typeof String(18));

console.log(Number("Gamze")); // NaN yazar

let num = "5"

let mul = "5" * 2
console.log(mul); // 10 yazar

let divide = 10 / num

console.log(divide); // 2 yazar

let minus = num - 1;

console.log(minus); // 4 yazar

let add = num + 5;

console.log(add); // 55 string olarak yazar  burada dönüşüm yapmalıyız

let add1 = 5 + Number(num);
console.log(add1); // 10 yazar


let a = "1"
a += 1 // 11 string yazar
a -= 1 // 10 number

console.log(a);





/// TRUTHY AND FALSY VALUES 

/**
 * There are 5 falsy values
 * 0
 * ""
 * undefined
 * null
 * Nan
 */

let cash = 0;

if (cash) {
    console.log("Find a job")
}
// If you write one line code u don't have to use curly braces
// if(cash == 0) console.log("No jobs found")

// 4- Mantıksal Oper

//&& (And)
// true && true => true
// true && false => false
// false && false => false





//|| (or)
// true || true => true
// true || false => true
// false || false => false



// ! (not) 
// !true => false
// !false=> true
/** 
 * AND OPERATOR
    const a = have license (true)
    const b = bigger than 18 (true)

    a && b = can drive (true)
    !a && b = cannot drive (false)
    a && !b = cannot drive (false)
    !a && !b = cannot drive(false)
 */

/** 
 * OR OPERATOR 
    const x = bigger than 65 
    const y = chronic disease 

    x || y = risky (true)
    !x || y = risky (true)
    x || !y = risky (true)
    !x || !y = not risky (false)
 */

// SWITCH STATEMENT --------------------------------------------------

// switch(expression){
//     case x:
//         code block
//         break
//     case y:
//         code block
//         break
//     case z:
//         code block
//         break
//     case m:
//         code block
//         break
//     case n:
//         code block
//         break
// }

let day = "saturday"

//if(day == "saturday" || day == "sunday")

switch (day) {
    case "monday":
        console.log("There is not class, ypu can practice")
        break
    case "tuesday":
        console.log("CSS")
        break
    case "wednesday":
        console.log("Js")
        break
    case "thursday":
        console.log("no class")
        break
    case "friday":
        console.log("CSS")
        break
    default:
        console.log("holiday")
        break
        // case "saturday":
        // case "sunday":
        //     console.log("holiday")
        //     break
}


// TERNARY OPERATOR
const gradeX = 50

// if(gradeX >= 60){
//     console.log("Passed")
// }else{
//     console.log("Failed")
// }

gradeX >= 60 ? console.log("Passed") : console.log("Failed")

const weather = "cold"

const season = weather === "hot" ? "summer" : "winter"

console.log("season: ", season)

// NULLISH COALESCING

//const val = "xyz"
const val = undefined

const value = val ? ? "Ahmet"

console.log("values ", value)

console.log(0 || "Ahmet")

console.log("Ahmet" && undefined && 2)
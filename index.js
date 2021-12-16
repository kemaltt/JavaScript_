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

// let fName = "Jeff"
// let sName = "Schneider"
// let work = "Amozon"

// let sentence = "He is " + fName + ' ' + sName + ' and He is founder of ' + work + '.';

// console.log(sentence);

// let betterSentence = `He is ${fName} ${sName} and He is founder of ${work}.`
// console.log(betterSentence);

// console.log("I want to write this \n\
// on new line")

// console.log(`I want to write this \n\
// on new line`)

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

// const birthYear = 2001;

// let generation;

// if (birthYear >= 2000) {
//     generation = "Z"

// } else if (birthYear < 2000) {
//     generation = "Y"

// }

// console.log(generation);

// -----------------------------------

// let grade = 80

// if (grade >= 90) {

//     let not = "AA"

//     console.log(not);

// } else if (grade <= 80) {

//     let not = "BA"
//     console.log(not);
// } else {

//     let not = "BB"
//     console.log(not);
// }

// TYPE CONVERSION AND TYPE COERCION-----------------------------

// console.log(typeof "18");
// console.log(typeof Number("18"));
// console.log(typeof String(18));

// console.log(Number("Gamze")); // NaN yazar

// let num = "5"

// let mul = "5" * 2
// console.log(mul); // 10 yazar

// let divide = 10 / num

// console.log(divide); // 2 yazar

// let minus = num - 1;

// console.log(minus); // 4 yazar

// let add = num + 5;

// console.log(add); // 55 string olarak yazar  burada dönüşüm yapmalıyız

// let add1 = 5 + Number(num);
// console.log(add1); // 10 yazar

// let a = "1"
// a += 1 // 11 string yazar
// a -= 1 // 10 number

// console.log(a);

/// TRUTHY AND FALSY VALUES

/**
 * There are 5 falsy values
 * 0
 * ""
 * undefined
 * null
 * Nan
 */

// let cash = 0;

// if (cash) {
//     console.log("Find a job")
// }
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

let day = "saturday";

//if(day == "saturday" || day == "sunday")

switch (day) {
    case "monday":
        console.log("There is not class, ypu can practice");
        break;
    case "tuesday":
        console.log("CSS");
        break;
    case "wednesday":
        console.log("Js");
        break;
    case "thursday":
        console.log("no class");
        break;
    case "friday":
        console.log("CSS");
        break;
    default:
        console.log("holiday");
        break;
        // case "saturday":
        // case "sunday":
        //     console.log("holiday")
        //     break
}

// TERNARY OPERATOR
const gradeX = 50;

// if(gradeX >= 60){
//     console.log("Passed")
// }else{
//     console.log("Failed")
// }

gradeX >= 60 ? console.log("Passed") : console.log("Failed");

const weather = "cold";

const season = weather === "hot" ? "summer" : "winter";

console.log("season: ", season);

// NULLISH COALESCING

//const val = "xyz"
// const val = undefined

// const value = val ? ? "Ahmet"

// console.log("values ", value)

// console.log(0 || "Ahmet")

// console.log("Ahmet" && undefined && 2)

// Ödev-------------------------------------------

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
Compare the team's average scores to determine the winner of the competition,
and print it to the console. 
2. Include a requirement for a minimum scoreof 100. Witht his rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
3. Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// 1-§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110-----------------------------------
// let comAvrdolp, comAvrkoal, scoreDolp1, scoreDolp2, scoreDolp3, scoreKoal1, scoreKoal2, scoreKoal3, avrDolp, avrKoal;

// scoreDolp1 = 96;
// scoreDolp2 = 108;
// scoreDolp3 = 89;

// avrDolp = (scoreDolp1 + scoreDolp2 + scoreDolp3) / 3;

// comAvrdolp = avrDolp.toFixed(2);

// scoreKoal1 = 88;
// scoreKoal2 = 91;
// scoreKoal3 = 110;

// avrKoal = (scoreKoal1 + scoreKoal2 + scoreKoal3) / 3;

// comAvrkoal = avrKoal.toFixed(2);

// console.log(`Dolphins avarage:${comAvrdolp}
// Koalas avarage:${comAvrkoal}`);

//  Dolphins avarage:97.67
// Koalas avarage:96.33

// 2-§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123--------------------------------------
// let scoreDolp1, scoreDolp2, scoreDolp3, scoreKoal1, scoreKoal2, scoreKoal3, avrDolp, avrKoal;

// scoreDolp1 = 97;
// scoreDolp2 = 112;
// scoreDolp3 = 101;

// avrDolp = (scoreDolp1 + scoreDolp2 + scoreDolp3) / 3;
// comAvrdolp = avrDolp.toFixed(1);

// scoreKoal1 = 109;
// scoreKoal2 = 95;
// scoreKoal3 = 123;

// avrKoal = (scoreKoal1 + scoreKoal2 + scoreKoal3) / 3;
// comAvrkoal = avrKoal.toFixed(1);

// if (avrDolp > avrKoal && avrDolp >= 100) {
//     console.log(`The winning Dolphin team!, Score:${comAvrdolp}`);
// } else if (avrKoal > avrDolp && avrKoal >= 100) {
//     console.log(`The winning Koala team!, Score:${comAvrkoal}`);

// } else {
//     console.log("No winner!")
// }

// The winning Koala team!, Score:109.0

// 3-§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106------------------------

// let scoreDolp1, scoreDolp2, scoreDolp3, scoreKoal1, scoreKoal2, scoreKoal3, avrDolp, avrKoal;

// scoreDolp1 = 97;
// scoreDolp2 = 112;
// scoreDolp3 = 101;

// avrDolp = (scoreDolp1 + scoreDolp2 + scoreDolp3) / 3;

// scoreKoal1 = 109;
// scoreKoal2 = 95;
// scoreKoal3 = 106;

// avrKoal = (scoreKoal1 + scoreKoal2 + scoreKoal3) / 3;

// if (avrDolp == avrKoal && avrDolp >= 100 && avrKoal >= 100) {
//     console.log(`This is draw!`)

// } else {
//     console.log('no winner!')
// }

// Dolphin and Koala winner!

// ---------------------------------------------------------------------------------------------------

// Take inputs from the user (the day and the time)  and return output whether is open or closed.
// Open -> Monday to Friday, 10-21
// Close -> all weekend

// const tag = prompt("Geben Sie den Tag");

// const uhr = prompt("Geben Sie die Uhr");

// if (tag != "Montag" && tag != "Dienstag" && tag != "Mittwoch" && tag != "Donnerstag" && tag != "Freitag" && tag != "Samstag" && tag != "Sonntag") {
//     alert('Geben Sie richtigen Tagsname')
// } else if (uhr >= 10 && uhr <= 22) {
//     switch (tag) {
//         case ("Montag"):
//             console.log("von 10 Uhr bis 22 Uhr geöffnet")
//             break
//         case ("Dienstag"):
//             console.log("von 10 Uhr bis 22 Uhr geöffnet")
//             break
//         case ("Mittwoch"):
//             console.log("von 10 Uhr bis 22 Uhr geöffnet")
//             break
//         case ("Donnerstag"):
//             console.log("von 10 Uhr bis 22 Uhr geöffnet")
//             break
//         case ("Freitag"):
//             console.log("von 10 Uhr bis 22 Uhr geöffnet")
//             break

//         default:
//             console.log("Wochenende Geschlossen")
//             break
//             // case "Samstag":
//             // case "Sonntag":
//             //     console.log("Wochenende Geschlossen")
//             //     break
//     }

// } else {
//     console.log("Geschlossen")
// }

// // Q1

// const avgDolphins = (96 + 108 + 89) / 3
// const avgKoalas = (88+ 91 + 110) / 3

// console.log(avgDolphins, avgKoalas)

// if (avgDolphins > avgKoalas){
//     console.log("Winner is Dolphins")
// }else {
//     console.log("Winner Kolas")
// }

// // Q2

// const avgDolphins2 = (97 + 112 + 101) / 3
// const avgKoalas2 = (109+ 95 + 123) / 3

// console.log(avgDolphins2, avgKoalas2)

// if(avgDolphins2 > avgKoalas2 &&  avgDolphins2 >= 100){
//     console.log("Winner is Dolphins")

// }else if(avgKoalas2 > avgDolphins2 && avgKoalas2 >=100){
//     console.log("Winner is Koalas")
// }

// // Q3

// const avgDolphins3 = (97 + 112 + 101) / 3
// const avgKoalas3 = (109+ 95 + 106) / 3

// console.log(avgDolphins3, avgKoalas3)

// if(avgDolphins3 > avgKoalas3 &&  avgDolphins3 >= 100){
//     console.log("Winner is Dolphins")

// }else if(avgKoalas3 > avgDolphins3 && avgKoalas3 >=100){
//     console.log("Winner is Koalas")
// }else if (avgKoalas3 == avgDolphins3 && avgKoalas3 >= 100 && avgDolphins3 >= 100){
//     console.log("This is draw")
// }else {
//     console.log("There is no winner")
// }

// // Take inputs from the user (the day and the time)  and return output whether is open or closed.
// // Open -> Monday to Friday, 10-21
// // Close -> all weekend

// const day = prompt("Enter the day: ")
// const time = prompt("Enter the time: ")

// if (day != "Monday" && day != "Tuesday" && day != "Wednesday" && day != "Thursday" && day != "Friday" && day != "Saturday" && day != "Sunday") {
//     alert("Please enter valid day")
// } else {
//     if ((day != "Saturday" && day != "Sunday") && (time >= 10 && time < 21)) {
//         console.log("Open")
//     } else {
//         console.log("Close")
//     }
// }

// if (hour <=21 && hour >= 10) {
//     switch (day) {
//         case ("monday"):
//             console.log("OPEN!")
//             break
//         case ("tuesday"):
//             console.log("OPEN!")
//             break
//         case ("wednesday"):
//             console.log("OPEN!")
//             break
//         case ("thursday"):
//             console.log("OPEN!")
//             break
//         case ("friday"):
//             console.log("OPEN!")
//             break
//         default:
//             console.log("CLOSED!")
//             break
//     }
// }
// else{
//     console.log("CLOSED!")
// }

// if(gun=="Monday" && time>=10 && time<=21)   { console.log("open")}
// else if(gun=="Tuesday" && time>=10 && time<=21)  { console.log("open")}
// else if(gun=="Wednesday" && time>=10 && time<=21){ console.log("open")}
// else if(gun=="Thursday" && time>=10 && time<=21) { console.log("open")}
// else if(gun=="Friday" && time>=10 && time<=21)   { console.log("open")}
// else                                             {console.log("close")}

// ---------FUNCTION---------------------------------------------------

// function myFirstFunction(a) {
//     console.log("Hello World")
// }

// myFirstFunction(); // call,invoke,execute

// function juiceExtractor(fruit) {
//     const juice = `This is ${fruit} juice`
//     console.log(juice);
// }

// juiceExtractor("apple")

// function juiceExtractor(fruit1, fruit2) {
//     const juice = `This is ${fruit1} and ${fruit2} juice.`
//     console.log(juice);
//     return juice
// }

// juiceExtractor("apple", "orange")

//---- Function decleration
function calcAge(birthYear) {
    // const age = 2021 - birthYear
    // return age
    return 2021 - birthYear;
}

//console.log(calcAge(1965))

// console.log(calcAge(1997))

//---- Function Expression code
const addition = function(a, b) {
    return a + b;
};

const total = addition(1965, 1612737);
console.log(total);

// ---- Arrow Function

const calcAge2 = (birthYear) => 2021 - birthYear;

console.log(calcAge2(2000));

const canDrive = (birthYear) => {
    const age = 2021 - birthYear;
    const allowed = 18 - age;
    return `You can drive ${allowed} year later.`;
};

const result = canDrive(2006);
console.log(result);

function hipotenus(a, b) {
    const firstValue = exponentValue(a);
    const secondValue = exponentValue(b);
    const result = (firstValue + secondValue) ** 0.5;
    return result;
}

function exponentValue(value) {
    return value ** 2;
}

const hipoResult = hipotenus(7, 24);
console.log(hipoResult);

// -----------------------------------------------

// function average(a, b, c) {

//     return (a + b + c) / 3

// }

// const avgDolphin = average(96, 108, 89);
// console.log(avgDolphin);

// const avgKoala = average(88, 91, 110);
// console.log(avgKoala);

// function findWinner(avgDolphin, avgKoala) {

//     if (avgDolphin > avgKoala) {
//         return `The winner is Dolphin`
//     } else {
//         return `The winner is Koala`
//     }

// }

// console.log(findWinner(avgDolphin, avgKoala));
// ----------------------------------------------------------------------------------------------------------------------

// 1.Take a positive number from user,
// 2. Write a function that check whether  the number is "Armstrong" or not.

// An n-digit number that is the sum of the nth powers of its digits is called an n-Armstrong number. Examples :
// 371 =3 ** 3 + 7 ** 3 + 1 ** 3;
// 9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4;
// 93084 = 9 ** 5 + 3 ** 5 + 0 ** 5 + 8 ** 5 + 4 **5.

// P.S:  consider the negative, decimal and any entries other than numeric values then display a warning message to the user.

// const num = prompt("Please enter a number");

// if (num < 0 ) {
//     alert("Please enter a positive number");
// } else {
//     function armStrong(num) {
//         const sum = 0;
//         const number = num.toString(); // rakamı string e çeviriyor( 371 i '371' olarak)
//         const digits = number.split(""); // string rakamı (123) ü (1,2,3) diye ayırıyor

//         for (const i = 0; i < digits.length; i++) {
//             const value = parseInt(digits[i]);
//             const cube = Math.pow(value, 3);
//             // sayının her bir i' inci değerinin küpünü alıp çeviriyor ve üzerine ekleyerek topluyor
//             sum = sum + cube;
//         }
//         if (sum == num) {
//             return `${num} is an armstrong number`;
//         } else {
//             return `${num} is not an armstrong number`;
//         }
//     }
// }
// console.log(armStrong(num));

// --------------------------------------------------
//  




// Find out if a given year is a “leap” year.----------------------------------------------------------------------
// In the Gregorian calendar, three criteria must be taken into account to identify leap years:
// The year must be evenly divisible by 4;
// If the year can also be evenly divided by 100, it is not a leap year; unless...
// The year is also evenly divisible by 400. Then it is a leap year.
// According to these rules, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300, and 2500 are not the leap years.
// Write a program that takes the year from user and gives output as “2020 is a leap year” or “2019 is not a leap year” .

// const year = prompt("Please enter a Year")

// function leapYear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {

//         return `${year} is a leap year`
//     } else {

//         return `${year} is a not leap year`
//     }

// }

// console.log(leapYear(2020));



// ---------------------------------------------

// let year = prompt("Please enter a Year")

// if (year % 4 == 0 && year % 100 != 0) {

//     console.log(`${year} is a leap year`)
// } else if (year % 400 == 0) {
//     console.log(`${year} is a leap year`)

// } else {
//     console.log(`${year} is a not leap year`)
// }


// ------------------------------------------String Methods---------------------------

let text = "Her şey güzel olacak !"

let len = text.length

console.log("length " + len); // kaç haneden oluşuyor boşluk sayılır 21 karakter

// slice(start,end)--------------------silmek için

let firstPart = text.slice(8, 13) // 1.start '2. bitiş  (güzel yazar
let secondPart = text.slice(8) // 8 den sonra hepsini yazar (güzel olacak !
let thirdPart = text.slice(-14, -8) // sondan sayar

console.log(firstPart); //güzel
console.log(secondPart); //güzel olacak !
console.log(thirdPart); //güzel

// substring(start,end)----------------------(negativ kabul etmez)

let part = text.substring(8, 13) // 1.start '2. bitiş  (güzel yazar

console.log(part);

// substr(start,lenght)-------------------------

let subStr = text.substr(8, 7) // 8.sıradan sonra 7 haneli yazdırır (güzel o)
console.log(subStr);

// Split----------------------------------------------------

let splittedPart = text.split(" ");
let splittedPart1 = text.split("");


console.log(splittedPart); //(5) ['Her', 'şey', 'güzel', 'olacak', '!']
console.log(splittedPart1); //(22) ['H', 'e', 'r', ' ', 'ş', 'e', 'y', ' ', 'g', 'ü', 'z', 'e', 'l', ' ', 'o', 'l', 'a', 'c', 'a', 'k', ' ', '!']

let text2 = "Turkey,Germany,USA,France"

let splittedPart2 = text2.split(",");

console.log(splittedPart2); //(4) ['Turkey', 'Germany', 'USA', 'France']
console.log(splittedPart2[0]); //Turkey

let splittedPart3 = text.split(""); // boşluk bırakmayınca tüm elemanları tek tek ayırıyor
console.log(splittedPart3); //(22) ['H', 'e', 'r', ' ', 'ş', 'e', 'y', ' ', 'g', 'ü', 'z', 'e', 'l', ' ', 'o', 'l', 'a', 'c', 'a', 'k', ' ', '!']

// Replace--------------------------------------------------------değiştirme,yeniden adlandırma

let string = "Current euro currency is 15,22"

let splitIt = string.split(" ");

console.log(splitIt); //(5) ['Current', 'euro', 'currency', 'is', '15,22']

let currency = splitIt[splitIt.length - 1]

currency = currency.replace(",", ".") // ,ile . değiştirir

console.log(currency); // 15.22

let dolar = splitIt[splitIt.length - 4].replace("euro", "dolar")

console.log(dolar); // dolar yazar

string1 = string.replace("euro", "dolar");
console.log(string1); //Current dolar currency is 15,22 yazar

console.log(string1.replace("15,22", "15.22")); //Current dolar currency is 15.22

// replaceAll-----

console.log(text2.replaceAll(",", ".")); // Turkey.Germany.USA.France(virgülyerine nokta )

// TRIM-----------------------baş ve sondaki boşluk alma

console.log(string1.replace(" ", "")); //Currentdolar currency is 15,22(ilk boşluğu almak için)
console.log(string1.replaceAll(" ", "")); //Currentdolarcurrencyis15,22
let string3 = "   Welcome to DGHome          "

console.log(string3);
console.log(string3.trim()); //Welcome to DGHome baive sondaki boşluğu aldı

// INCLUDES----------------------------
console.log(string3.includes("Welcome")); //true yazar 

// INDEXOF--------------------------
let string4 = "All is well !"

let ind = string4.indexOf("l");
console.log(ind); // 1 ilk l yi

console.log(string4.lastIndexOf("l")); // 10 (10 . değeri gösterir)

let ind1 = string4.indexOf("l", 5);
console.log(ind1); // 5 inciindex ten sonraki 9. l yi gösterir

let ind2 = string4.indexOf("l", ind + 1);
console.log(ind2); // 2.index

let ind3 = string4.indexOf("well");
console.log(ind3); // 7 yazar well 7.index

// Concat----------------------------------

let s1 = "Hello "
let s2 = "World"
let s3 = s1.concat(s2)
console.log(s3); //Hello World yazar

// charAt-------------------------------------karakter bulmak

let car = s3.charAt(6);
console.log(car); // W yazdırırı

// toLowerCase/toUpperCase

let low = s3.toLowerCase();
console.log(low); //hello world

let up = s3.toUpperCase();
console.log(up); //HELLO WORLD

// ------------------------------------ STRING METHODS -------------------------------- //

// ------------------------------------ ARRAYS -------------------------------- //

const student1 = "Muhlise"
const student2 = "Utku"
const student3 = "Kemal"

const studentArray = ["Muhlise", "Utku", "Kemal", "Cengiz"]

console.log(studentArray[0]); //Muhlise
console.log(studentArray[3]); //Cengiz
console.log(studentArray[5]); //undefined




console.log(studentArray.length); // 4
console.log(studentArray[studentArray.length - 1]); //Cengiz

studentArray[2] = "Beyza"
console.log(studentArray); //(4) ['Muhlise', 'Utku', 'Beyza', 'Cengiz'] ,'kemal' yerine beyza yazmışoldu

// //----- BASIC ARRAY METHODS/OPERATIONS
// // ADDING ELEMENT 
// // push() -> adds element at the and of the array
//push() sonuna atama

studentArray.push("Ahmet")
console.log(studentArray); // ['Muhlise', 'Utku', 'Beyza', 'Cengiz', 'Ahmet']

const newArray = studentArray.push("Hasan");
console.log(newArray); // 6 uzunluğunu yazdırır
console.log(studentArray); //['Muhlise', 'Utku', 'Beyza', 'Cengiz', 'Ahmet', 'Hasan']


// // unshift() -> adds element as a first value of array
//unshift--------başa ekleme---------------

studentArray.unshift("Sena");

console.log(studentArray); //['Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz', 'Ahmet', 'Hasan']

studentArray.unshift("2021");
console.log(studentArray); //['2021', 'Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz', 'Ahmet', 'Hasan']

studentArray.unshift(true);
console.log(studentArray); // [true, '2021', 'Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz', 'Ahmet', 'Hasan']

studentArray.unshift(['3']);
console.log(studentArray); // [Array(1), '2021', 'Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz', 'Ahmet', 'Hasan']

//REMOVE ELEMENT------------------------------------son elementi siler
// // REMOVE ELEMENT
// // pop() -> removes last element

studentArray.pop();
console.log(studentArray); //[Array(1), '2021', 'Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz', 'Ahmet']
const popped = studentArray.pop();
console.log(popped); //Ahmet yazdı

//push ve unshift te uzunluk döndürür

// // shift() -> removes first element from array
//Shift----ilk elemanı siler

studentArray.shift();
console.log(studentArray); // ['2021', 'Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz']
const shifted = studentArray.shift();
console.log(shifted); // 2021 yazdı

//INDEXOF--------

console.log(studentArray.indexOf("Muhlise")); // 1 yazdı muhlise 1.element

studentArray.push("23");

console.log(studentArray); //['Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz', '23']
console.log(studentArray.indexOf("23")); //6

// INCLUIDES------------------

console.log(studentArray.includes("Cengiz")); //true
console.log(studentArray.includes("Ali")); //false

// // INCLUDES 
// console.log(studentArray.includes("Cengiz"))
// console.log(studentArray.includes("Utku"))

// // SPLICE 
// /**
//   splice(start, deleteCount)
//   splice(start, deleteCount, item1)
//  */

const spliced = studentArray.splice(2, 2) //  ['2021', 'Sena', 'Muhlise', 'Utku', 'Beyza', 'Cengiz', '23']
console.log(spliced) //  ['Muhlise', 'Utku'] bunlrı çıktı
console.log(studentArray) //['2021', 'Sena', 'Beyza', 'Cengiz', '23']

const spliced2 = studentArray.splice(0, 2, "Ebuzer", "Cengiz", "Erhand")
console.log(spliced2) //['2021', 'Sena'] bu ikisini aldı
console.log(studentArray) // ['Ebuzer', 'Cengiz', 'Erhand', 'Beyza', 'Cengiz', '23'] 
const spliced3 = studentArray.splice(2, 0, "Hasan", "Muhlise")
console.log(spliced3) // []
console.log(studentArray) //['Ebuzer', 'Cengiz', 'Hasan', 'Muhlise', 'Erhand', 'Beyza', 'Cengiz', '23'] 2.element cengizden sonra 

//   // SLICE --------------------------------
//   // slice(start, end) // end does not included
const sliced = studentArray.slice(1, 3)
console.log(sliced) //  ['Cengiz', 'Hasan']
console.log(studentArray) // ['Ebuzer', 'Cengiz', 'Hasan', 'Muhlise', 'Erhand', 'Beyza', 'Cengiz', '23'] orjinali değiimedi.


// FizzBuzz -----------------------------------------------------------------------------------
// boş array oluştu
// fizzBuzz function yaz 
// function her çağırıldığında 1 den başlayarak sırayla sayıları ekle
// 3 ve 3 ün katları Fizz 5 ve 5 in katları Buzz 15 ve katları FizzBuzz yazacak


// const fbArray = [];
// let count = 1;

// function fizzBuzz() {

//     if (count % 3 == 0 && count % 5 == 0) {
//         fbArray.push("fizzBuzz")

//     } else if (count % 3 == 0) {
//         fbArray.push("Fizz");

//     } else if (count % 5 == 0) {
//         fbArray.push("Buzz");
//     } else {
//         fbArray.push(count)
//     }
//     count++
//     return fbArray
// }

// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());
// console.log(fizzBuzz());


// const fbArray = [];

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         fbArray.push("fizzBuzz")

//     } else if (i % 3 == 0) {
//         fbArray.push("Fizz");

//     } else if (i % 5 == 0) {
//         fbArray.push("Buzz");
//     } else {
//         fbArray.push(i)
//     }

// }
// console.log(fbArray);


// const fbArray = [];

// function fizzBuzz() {

//     for (let i = 1; i <= 100; i++) {

//         if (i % 3 == 0 && i % 5 == 0) {
//             fbArray.push("fizzBuzz")

//         } else if (i % 3 == 0) {
//             fbArray.push("Fizz");

//         } else if (i % 5 == 0) {
//             fbArray.push("Buzz");
//         } else {
//             fbArray.push(i)
//         }

//     }
//     return fbArray
// }
// console.log(fizzBuzz());

// ------------------------------------ ARRAYS -------------------------------- //


// ------------------------------------ OBJECTS -------------------------------- //
// const employeeArr = [
//     'John',
//     'Snow',
//     28,
//     'trainer'
// ]

// key-value pairs
const empObj = {
    firstName: 'John',
    lastName: 'Snow',
    age: 28,
    job: 'trainer'
}
console.log(empObj)

// // DOT NOTATION - BRACKET NOTATION

// // DOT N.
console.log(empObj.firstName) //John

// //BRACKET N.
console.log(empObj['firstName']) // John

nameKey = "Name"
console.log(empObj['first' + nameKey])
console.log(empObj['last' + nameKey])

// Objenin içinde var olan birşeyi sorgulama-----------------------------------------
// const val = prompt('What do u want to know about John')

// console.log(empObj.val)
// console.log(empObj[val])

// empObj[val] ? console.log(empObj[val]) : console.log('Wrong Request')
// ---------------------------------------------------------------------------
empObj.location = 'Germany' // location ekleme
console.log(empObj) //{firstName: 'John', lastName: 'Snow', age: 28, job: 'trainer', location: 'Germany'}

empObj['mail'] = "abc@mail.com"
console.log(empObj)

empObj['language'] = ['English', "Deutsch", "Spanish"]
console.log(empObj)

empObj['driveLicense'] = true
console.log(empObj)


const empObj2 = {
    firstName: 'John',
    lastName: 'Snow',
    birthYear: 1990,
    job: 'trainer',

    // calcAge : function(birthYear){
    //     return 2021 - birthYear
    // }
    calcAge: function() {
        console.log("this: ", this)
        return 2021 - this.birthYear
    }
}

console.log(empObj2.calcAge())


// ------------------------------------ OBJECTS -------------------------------- //

//------------------------------------LOOPS-----------------------------------------//
console.log("push up 1")
console.log("push up 2")
console.log("push up 3")
console.log("push up 4")
console.log("push up 5")
console.log("push up 6")
console.log("push up 7")
console.log("push up 8")
console.log("push up 9")
console.log("push up 10")
    // bunun yerine for ----------------------------------

// FOR-----------------------------------------------

for (let rep = 1; rep <= 10; rep++) {
    // console.log("push up " + rep);
    console.log(`push up ${rep}`)
}


const array = ["data1", "data2", "data3", "data4", "data5"]

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);


for (let i = 0; i < array.length; i++) {

    console.log(array[i]);
}

// Continue-Break--------------------------------------
let evenNummers = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) continue
    if (i == 52) break // 52 gördüğü anda çıkar
    evenNummers.push(i)
}
console.log(evenNummers);

for (let i = 1; i <= 3; i++) {
    console.log(`----------------Exercises ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`repeat ${j}`)
        for (let m = 1; m <= 3; m++) {
            console.log(`break ${m} sec`)
        }
    }

}
// tersten çalışma 10 dan geriye
const reverseArray = []
for (let i = 10; i >= 0; i--) {
    reverseArray.push(i)
}
console.log(reverseArray);


// WHİLE--------------------------------------------------------
let rep = 1;
while (rep <= 10) { // treu ise

    console.log(`push up ${rep}`)

    rep++ // false olması lazım
}


let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)


while (dice != 6) {
    console.log(`You rolled ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1

    console.log(dice == 6 ? "You win" : "Try again")
}

// // DO WHİLE


let nummer = 1;

let sum = 0

do {
    sum += nummer
    nummer++
} while (nummer <= 10)
console.log("The total sum ", sum)

/** 
1.Take a positive number from user,
2. Write a function that check whether  the number is "Armstrong" or not.

An n-digit number that is the sum of the nth powers of its digits is called an n-Armstrong number. Examples :
371 =3 ** 3 + 7 ** 3 + 1 ** 3;
9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4;
93084 = 9 ** 5 + 3 ** 5 + 0 ** 5 + 8 ** 5 + 4 **5.

P.S:  consider the negative, decimal and any entries other than numeric values then display a warning message to the
*/


// const num = prompt("Please enter a number");

// if (num <= 0 || isNaN(num)) {
//     alert('Enter a correct number')


// } else {


//     function armStrong(num) {
//         let len = num.length
//         let sum = 0;
//         let arr = num.split(""); // string rakamı (123) ü (1,2,3) diye ayırıyor

//         for (let i = 0; i < arr.length; i++) {

//             sum += arr[i] ** len
//         }
//         return sum == num ? `${num} is a Armstron` : `${num} is a not Armstron`
//     }
// }
// console.log(armStrong(num));



//------------------------------------LOOPS-----------------------------------------//

//SORU 1
// 1. Given an array of numbers, create a function which returns the same array but with each element’s index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc

// function addIndexes(array) {
//     let arrayTwo = [];
//     for (let i = 0; i < array.length; i++) {
//         arrayTwo.push(array[i] + i)
//     }
//     return arrayTwo;

// }

// let argumentArray = [-25, -14, 5, 12]
// let returnedArray = addIndexes(argumentArray);

// console.log(returnedArray);


function addIndexes(array) {

    let arrayTwo = []
    for (let i = 0; i < array.length; i++) {
        arrayTwo.push(array[i] + i)

    }
    return arrayTwo;
}

console.log(addIndexes([-12, -5, 5, 3]))


// -------------------------------
//SORU 2
//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function num(a, b) {

    return (a == 10 || b == 10 || (a + b) == 10)
        // if (a == 10 || b == 10 || (a + b) == 10) {

    //     return true;
    // } else {
    //     return false
    // }
}
console.log(num(12, 8)); //false
console.log(num(2, 8)); //true

//---------------------------------

// SORU 3
//     A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward
//     Write a function to check if the sentence is palindrome 

function isPalindrome(str) {

    // var eliminateReg = /[\W_]/g;
    // let lowerCaseStr = str.toLowerCase().replace(eliminateReg , '')
    // let reversedStr = lowerCaseStr.split('').reverse().join('')
    // return(lowerCaseStr === reversedStr)


    var reg = /[\W_]/g;
    let lowerCaseStr = str.toLowerCase().replace(reg, '')
    let strLength = lowerCaseStr.length;


    for (let i = 0; i < strLength / 2; i++) {
        if (lowerCaseStr[i] !== lowerCaseStr[strLength - 1 - i]) {
            return false;
        }
        return true;
    }
}
console.log(isPalindrome("Ey edip Adana da pide ye")) // true
console.log(isPalindrome("1221")) //true
console.log(isPalindrome("enter a number ")) //false


// function isPalindrome(str) {

//     var eliminateReg = /[\W_]/g; //regex
//     let lowerCaseStr = str.toLowerCase().replace(eliminateReg, '')
//     let reversedStr = lowerCaseStr.split('').reverse().join('')
//     return (lowerCaseStr == reversedStr)

// }
// console.log(isPalindrome("ey edip adanada pide ye"))
//---------------------------------------------------------------------------------

//Bugünün sorusu PRIME NUMBER !
// — Take a number from user.
// — Check if the number is positive integer
// — Say user  whether the number is prime number or not.
// P.S. : Prime Number -> Asal sayı :smiley:
4
// let number = prompt("enter a number")

// number = Number(number)

// if (number < 0 || isNaN(number) || Number.isInteger(number) == false) {

//     alert `please enter integer`
// } else {

//     function primNum(number) {
//         if (number < 2)
//             return `${number}  is not a Prime Number`

//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 return `${number}  is not a Prime Number`
//             }
//         }
//         return `${number}  is a Prime Number`
//     }

// }
// console.log(primNum(number));

// -----------------------------------------------------------------------------------

// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
// e.g:
// indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
// output : "acbd"

let firstVal = prompt("Enter a value")

function val(firstVal) {

    let secondVal = firstVal.split("");
    let evenIndex = []
    let oddIndex = []


    for (let i = 0; i < secondVal.length; i++) {

        if (i % 2 == 0) {
            evenIndex.push(firstVal[i]);
        } else {
            oddIndex.push(firstVal[i]);
        }
    }
    let newVal = evenIndex.join("") + oddIndex.join("")
    return newVal
}
console.log(val(firstVal));


// let val
// val = prompt("Enter a value")
// orderedVal(val)

// function orderedVal(val) {
//     let arrVal = val.split("")
//     let arrEven = [],
//         arrOdd = []
//     for (let i = 0; i < arrVal.length; i++) {
//         i % 2 == 0 ? arrEven.push(arrVal[i]) : arrOdd.push(arrVal[i])
//     }
//     let arrEvenStr = arrEven.join("")
//     let arrOddStr = arrOdd.join("")
//     let newVal = arrEvenStr + arrOddStr
//     return console.log(newVal);
// }
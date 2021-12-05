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
// }

// if (uhr >= 10 && uhr <= 22) {
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
//     console.log("Winner Koalas")
// }

// // Q3 

// const avgDolphins3 = (97 + 112 + 101) / 3
// const avgKoalas3 = (109+ 95 + 106) / 3

// console.log(avgDolphins3, avgKoalas3)

// if(avgDolphins3 > avgKoalas3 &&  avgDolphins3 >= 100){
//     console.log("Winner is Dolphins")

// }else if(avgKoalas3 > avgDolphins3 && avgKoalas3 >=100){
//     console.log("Winner Koalas")
// }else if (avgKoalas3 == avgDolphins3 && avgKoalas3 >= 100 && avgDolphins3 >= 100){
//     console.log("This is draw")
// }else {
//     console.log("There is no winner")
// }


// // Take inputs from the user (the day and the time)  and return output whether is open or closed.
// // Open -> Monday to Friday, 10-21 
// // Close -> all weekend

// const day = prompt("Enter the day: ")
// const time = prompt ("Enter the time: ")

// if (day != "Monday" && day != "Tuesday" && day!= "Wednesday" && day !="Thursday" && day != "Friday" && day != "Saturday" &&  day != "Sunday"){
//     alert("Please enter valid day")
// }else {
//     if ( (day != "Saturday" && day != "Sunday") &&  (time >= 10 && time < 21) ){
//         console.log("Open")
//     }else{
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

function myFirstFunction(a) {
    console.log("Hello World")
}

myFirstFunction(); // call,invoke,execute


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
    return 2021 - birthYear
}

//console.log(calcAge(1965))

// console.log(calcAge(1997))

//---- Function Expression code
const addition = function(a, b) {
    return a + b
}

const total = addition(1965, 1612737)
console.log(total)


// ---- Arrow Function 

const calcAge2 = birthYear => 2021 - birthYear

console.log(calcAge2(2000))

const canDrive = (birthYear) => {
    const age = 2021 - birthYear
    const allowed = 18 - age
    return `You can drive ${allowed} year later.`
}

const result = canDrive(2006)
console.log(result)



function hipotenus(a, b) {
    const firstValue = exponentValue(a)
    const secondValue = exponentValue(b)
    const result = (firstValue + secondValue) ** (0.5)
    return result
}

function exponentValue(value) {
    return value ** 2
}

const hipoResult = hipotenus(7, 24)
console.log(hipoResult)

// -----------------------------------------------

function average(a, b, c) {

    return (a + b + c) / 3

}

const avgDolphin = average(96, 108, 89);
console.log(avgDolphin);

const avgKoala = average(88, 91, 110);
console.log(avgKoala);

function findWinner(avgDolphin, avgKoala) {

    if (avgDolphin > avgKoala) {
        return `The winner is Dolphin`
    } else {
        return `The winner is Koala`
    }

}

console.log(findWinner(avgDolphin, avgKoala));
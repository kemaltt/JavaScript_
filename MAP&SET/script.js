// console.log("Hallo World")

const obj = {
    name: "Orhan",
    surname: "Tütüncü",
    age: "9"
}
console.log(obj.name); //dot
console.log(obj['surname']); // bracket notation

const lastName = "surname"
console.log(obj.lastName); //undefined 
console.log(obj[lastName]); //Tütüncü  ' bracket notation da yeni atama yapılabilir'

//obj ye yeni ekleme için-------------------
obj.occupation = "developer" //---dot ile
obj['course'] = 'react' //----bracket ile


// console.log(obj); //{
//     name: 'Orhan',
//     surname: 'Tütüncü',
//     age: '9',
//     occupation: 'developer'
//   }

// obje lerin içeriği aynı olması bir birbirine eşit olması demek değildir.

const x = {
    a: 1,
    b: 2
}

const y = {
        a: 1,
        b: 1
    }
    // console.log(x == y); // false  yazdırır

// OBJENİN KEY VE VALUE SİNİ BULMA------------------------------------------------------------------

// objenin uzunluğunu nasıl buluruz---------Object.keys(x)--------------------------------------------------

// console.log(Object.keys(obj)); //[ 'name', 'surname', 'age', 'occupation', 'course' ] array şeklinde yazdırdı

const objectKeys = Object.keys(obj)

// for (let i = 0; i < objectKeys.length; i++) {

//     console.log(objectKeys[i]); // name surname age occupation course  olarak getirdi
// }
// map ile yazdırma----------------------------------------------------------------

// objectKeys.map((element) => {
//         console.log(element);
//     })
// yada--
objectKeys.map((element) => console.log(element)); // name surname age occupation course => elementleri

objectKeys.map((element, index) => console.log(element, index)); // name 0 surname 1 age 2 occupation 3 course 4 index numaraları

// Objenin value lerini bulma-----------------------------------------------------

const objectValues = Object.values(obj);

console.log(objectValues); //[ 'Orhan', 'Tütüncü', '9', 'developer', 'react' ]

objectValues.map((el) => console.log(el)); // Orhan Tütüncü 9 developer react=> 

objectValues.map((el, ind) => console.log(el, ind)); //Orhan 0 Tütüncü 1 9 2 developer 3 react 4

console.log(objectValues.length); // 5  


// Obj içinde varmı yokmu?----------------------------------------------------------
// console.log(objectValues.includes('react')); // true
// console.log(objectValues.includes('9')); // true
// console.log(objectKeys.includes('age')); // true

// MAP_______ilki element ikinci value[1,2]________________-__________________________________________________________________________-

const myMap = new Map([
    [1, 2],
    ['a', 'b'],
    [() => console.log('a'), 'a']
])
console.log(myMap); // Map(3) {1 => 2, 'a' => 'b', ƒ => 'a'}

// length almak için

console.log(myMap.size); // 3 tane element

// temizlemek için
// myMap.clear()
// console.log(myMap);//Map(0) {size: 0}


// value almak için
console.log(myMap.get('a')); // b gelir çünkü a=b
console.log(myMap.get(1)); // 2 gelir çünkü 1=2

// delete--------------------------------------
myMap.delete(1)
console.log(myMap); //Map(2) {'a' => 'b', ƒ => 'a'}

// içerisinde varmı öğrenmek için, key ler iiçin geçerli

console.log(myMap.has('a')); // true
console.log(myMap.has('b')); // false çünk,b value
console.log(myMap.has('1')); // false çünk, sildik

// içine ekleme -----set()----------------------------------------

console.log(myMap.set(3, 5)); //Map(3) {'a' => 'b', ƒ => 'a', 3 => 5}

console.log(myMap.keys()); // MapIterator {'a', ƒ, 3}
console.log(myMap.values()); // MapIterator {'b', 'a', 5}
console.log(myMap.entries()); // MapIterator {'a' => 'b', ƒ => 'a', 3 => 5} komple yazdırıyor

for (let key of myMap.keys()) console.log(key); // a  () => console.log('a')  3
for (let val of myMap.values()) console.log(val); // b a 5
for (let [key, val] of myMap.entries()) console.log([key, val]); //(2) ['a', 'b']  (2) [ƒ, 'a']  (2) [3, 5]

// yada 

myMap.forEach((val, key) => console.log(val, key)); // b a  a () => console.log('a')  5 3

// SET------------------new Set()-----------------------------------------------------------------

const mySet = new Set()

console.log(mySet); //Set(0) {size: 0}

const arr = [1, 2, 3]
    // console.log(arr);

const newSet = new Set(arr);
console.log(newSet);

//  yada-------------------------------------------
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet); //Set(2) {1, 2}

// birden fazla value yazmaz---------

const arr2 = [1, 2, 3, 2, 1, 3, 4, 5, 4, 5]

const newSet2 = new Set(arr2);
console.log(newSet2); //Set(5) {1, 2, 3, 4, 5} tekrar edenler yazmaz
// ------------------------------------------------------------------------------

console.log(newSet.delete(1)); // true yazar=> 1 vardı ve sildi
console.log(newSet); //Set(2) {2, 3}
console.log(newSet.delete(5)); // false yazar=> çünki 5 yoktu

// Obje koymak için---------------------------------------

mySet.add({ a: 1, b: 2 })
console.log(mySet); //Set(4) {1, 2, 3, {…}}  value: {a: 1, b: 2}

console.log(mySet.has(1)); //true

// ---length almak için------------------------------

console.log(mySet.size); // 4 

for (let key of mySet) console.log(key); // 1 2 3 {a: 1, b: 2} getirdi

mySet.forEach((el) => console.log(el)) // 1 2 3 {a: 1, b: 2} getirdi
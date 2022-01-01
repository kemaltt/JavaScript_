// //MAP-FILTER-REDUCE------------------------------
// const arr = [1, 4, 6, 9, 12, 56]

// arr.map((element, index, array) => {
//     console.log(`element:${element},index:${index},array${array}`)
// })

// //bunların her birinin küpünü alalım
// const mapped = arr.map((element, index, array) => {
//     // return element ** 3
//     return `index:${index},${element**3}`
// })
// console.log(arr); //(6) [1, 4, 6, 9, 12, 56]
// console.log(mapped) //(6) [1, 64, 216, 729, 1728, 175616]

// ------------------------------------------------------------------------



const DATA = [{
        url: "flw1.jpg",
        title: "Title 1",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "flw2.jpeg",
        title: "Title 2",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "flw3.jpeg",
        title: "Title 3",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "flw4.jpeg",
        title: "Title 4",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "/flw5.jpeg",
        title: "Title 5",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
]

// const container = document.createElement("div")
// container.setAttribute("class", "container")

// console.log(container);

const container = document.querySelector(".container");

DATA.map(el => {

    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "card")
    newDiv.style.width = "18rem"

    const img = document.createElement("img")
    img.setAttribute("src", `./images/${el.url}`)
    img.setAttribute("class", "card-img-top")

    const innerDiv = document.createElement("div")
    innerDiv.setAttribute("class", "card-body")


    const head = document.createElement("h5")
    head.setAttribute("class", "card-title")
    head.textContent = el.title

    const prg = document.createElement("p")
    prg.setAttribute("class", "card-text")
    prg.textContent = el.description

    const btn = document.createElement("a")
    btn.setAttribute("class", "btn btn-primary")
    btn.textContent = "Go somewhere"

    innerDiv.appendChild(head)
    innerDiv.appendChild(prg)
    innerDiv.appendChild(btn)

    newDiv.appendChild(img)
    newDiv.appendChild(innerDiv)

    container.appendChild(newDiv)

})


// //FILTER----------------------------------------------------


const numbers = [1, 12, 5, 8, 37, 86, 54, 33, 96]

const filtered = numbers.filter(el => el % 2 == 0) // tek olanları çıkalım
console.log(filtered); //[12, 8, 86, 54, 96]
// ------------------------------------------------------------------
const arr2 = [1, 2, 3, 3, 5, 5, 5]

function filterMoreThanOne(arr2) {
    return arr2.filter((el, i) => arr2.indexOf(el) == i) // tekrar edeneleri çıkalım

}
console.log(filterMoreThanOne(arr2)); //[1, 2, 3, 5]


//  Create a function that filters strings by length given two arguments: minimum length, maximum length
//  Either argument may be missing. if both are missing, return the original array


const arrayOfStrings = ['', 'a', 'bc', 'def', 'ghij', 'klmno', 'pqrstu', 'vwxyz12'];

// const filteredArr = arrayOfStrings.filter(el => el.length > 1 && el.length < 3);
// console.log(filteredArr);


// function filteredAr(arrayOfStrings) {
//     return arrayOfStrings.filter((e,minl) => e.length >= 2 && e.length <= 5)

// }
// console.log(filteredAr(arrayOfStrings))

// function filterStrings(arr, minLength, maxLength) {
//     console.log(minLength, maxLength)
//     arrayOfStrings = arrayOfStrings.filter(str => str.length >= (minLength ?? 0))
//     arrayOfStrings = arrayOfStrings.filter(str => str.length <= (maxLength ?? str.length))
//     return arrayOfStrings
// }

// console.log(filterStrings(arrayOfStrings))



// // REDUCE---azaltma-------------------------------------------------

// reduce(function(preValue, currentValue,i,arr),initialValue)

//arr.reduce((prevValue,currentValue,i,arr))
// const numbers2 = [1, 12, 5, 8, 37, 86, 54, 33, 96]

// const reduced = numbers2.reduce(function(preValue, currentValue) {

//         // console.log("prevValue:" + preValue)
//         // console.log("currentValue:" + currentValue)
//         return preValue + currentValue
//     }) //,initialValue)
// console.log(reduced);

// // Fİnd Max Number (reduce)------------------------------------
const num = [1, 12, 5, 8, 37, 86, 54, 33, 96]

const maxNum = num.reduce(function(preValue, currentValue) {
    return preValue > currentValue ? preValue : currentValue

    // return Math.max(preValue, currentValue)

    // if (currentValue > preValue) {
    //     return currentValue
    // } else {
    //     return preValue
    // }
})
console.log(maxNum);
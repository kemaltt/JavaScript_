// id ile çağırma-------getElementById("")----------------------------------
let firstName = document.getElementById("first-name");
console.log(firstName);

let lastName = document.getElementById("last-name");
console.log(lastName);

//class ile------------------------getElementsByClassName-----------------------------
let formControl = document.getElementsByClassName("form-control");
console.log(formControl); // tüm form-control class ları getirdi
console.log(formControl[0]); // 1.clss ı getirdi

//getElementsByTagName-------------------------------------------

let input = document.getElementsByTagName("input")

console.log(input); // tüm inputlar gelmiş oldu

console.log(input[3]); // 4.sıradki password input u geldi

// input[3].placeholder = "Enter a password" //Password üEnter a password le değiştirdi.

//querySelector &&querySelectorAll-------------------------------------------------

let fName = document.querySelector("#first-name");
console.log(fName); // id sifirst name olan input geldi
let fControl = document.querySelector(".form-control");
console.log(fControl); // class ı form-control olan ilk input geldi 

let div = document.querySelector("div");
console.log(div); // ilk div gelmiş oldu

let fControlAll = document.querySelectorAll(".form-control");
//console.log(fControlAll); //  class ı form-control olan tüm inputlar geldi
//console.log(fControlAll[1]); //  class ı form-control last-name  geldi
// fControlAll[1].value = "Tütüncü" // last name placeholder tütüncü oldu

//-------------------------------------------

// firstName.placeholder = "Kemal"
// firstName.value = "Orhan"
// document.querySelector("#first-name").value = "Sena"
// lastName.value = "Tütüncü"



let formItems = document.querySelector(".form-items").innerHTML //tüm Html yi getirir

console.log(formItems)

// let formItems = document.querySelector(".form-items").innerText
// console.log(formItems)

let first3 = document.querySelector("#first-three")
console.log(first3)

// first3.innerHTML = `<div>Muhlise</div>`



// let node = document.createElement("div")
// let text = document.createTextNode("Utku")
// node.appendChild(text)

// first3.appendChild(node)
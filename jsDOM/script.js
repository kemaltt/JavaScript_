// id ile çağırma-------getElementById("")----------------------------------
// let firstName = document.getElementById("first-name");
// console.log(firstName);

let lastName = document.getElementById("last-name");
console.log(lastName);

//class ile------------------------getElementsByClassName-----------------------------
let formControl = document.getElementsByClassName("form-control");
console.log(formControl); // tüm form-control class ları getirdi
console.log(formControl[0]); // 1.clss ı getirdi array olarak döner

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

let div = document.querySelector("div"); // normal tag alma için tag ismini yazıyoruz
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

// let val = firstName.value
// console.log(val); // utku yazdı
// firstName.value = "Orhan" // orhan atadı
// console.log(val); // utku yazdı

// ---- innerText & innerHTML & textContent----------------------------------------------------------------------------------------------------------

// let formItems = document.querySelector(".form-items").innerHTML //tüm Html yi getirir tagler le birlikte.

// console.log(formItems)

// let formItems = document.querySelector(".form-items").innerText // sadece text leri getirir
// console.log(formItems)

let first3 = document.querySelector("#first-three")
console.log(first3)

// first3.innerHTML = `<div>Muhlise</div>`// olan div i siler yerine nu div iyazdırır.

let check = document.querySelector(".form-check-label").innerText //içindeki text i aldı

console.log(check); // I confirm that all data are correct

// let formItems = document.querySelector('.form-items').textContent// tüm text leri alıyor aralarda boşluklarla
let formItems = document.querySelector('.form-items').innerText // tüm text leri alıyor aralarda boşluk olmadan o yüzden daha tercih sebebi
console.log(formItems);




//---appendChild elemen ekleme------------------------------------------

// let node = document.createElement("div") // bir div oluşturdu
// console.log(node);
// let text = document.createTextNode("Utku") // text oluşturdu
// console.log(text);

// node.appendChild(text) // text i div in içine ekledi

// console.log(node);

// first3.appendChild(node) // id si first3 olan div in altına sonuncu element olarak atadı.
// console.log(first3);

// let first3Child = `<div id="first-three">
// <div class="col-md-12">
//     <input id="first-name" class="form-control" type="text" name="name" placeholder="Full Name" required />
// </div></div>`

// let appended = document.createElement('first3Child')

//------------------createElement---setAttribute('id', 'first-name')------------------------------------------------

// let firstName = document.querySelectorAll(".form-control")[0]; // firsname id atamak için ilkeleman

// console.log(firstName);

// firstName.setAttribute('id', 'first-name'); // id si first-name olan bir attribute atadı

// console.log(firstName);

// firstName.setAttribute('placeholder', 'First Name'); // placeholder atadı

// console.log(firstName);

// firstName.setAttribute('class-name', 'name class')
// console.log(firstName);

//---getAttribute('class')----------------------------

// const classAttr = firstName.getAttribute('class') // class name getirmek içim
// console.log(classAttr); // form-control getirdi

// const classNameAttr = firstName.getAttribute('class-name')
// console.log(classNameAttr);// name class


// -----className & classList(var olana class name ekleme)--------------------------------------------------------
let firstName = document.querySelector('#first-name');

console.log(firstName);

// firstName.className = "form-control first-name" // form-control class name atıyor
// console.log(firstName);

// let classProp = firstName.className; // get Attr gibi class ismini çağırıyor
// console.log(classProp);// form-control yazdı

// firstName.classList = 'form-control first-name'

// console.log(firstName);

firstName.classList.add('sena'); //--form-control first-name sena 'sena yı ekledi
console.log(firstName);

// firstName.className = "Sena"// class tamamen değişti Sena oldu
// console.log(firstName);

firstName.classList.remove("form-control"); //  form-control siler

console.log(firstName);

firstName.setAttribute('class', 'orhan') // classkomple yeniden yazar
console.log(firstName);
// -------------------------------------------
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "col-md-12")

let newInput = document.createElement("input");
newInput.setAttribute('type', 'text');
newInput.setAttribute('name', 'name');
newInput.setAttribute('placeholder', 'Full Name');
newInput.setAttribute('class', 'form-control');


newDiv.appendChild(newInput); // div in içine inputları ekledi
console.log(newDiv);

first3.appendChild(newDiv); // id si first3 olan dive newdiv iekledi sonuncu olarak
console.log(first3);

// insertBefore()-----------------------------var olanın önüne eklemek için
// parentNode.insertBefore(newNode,childNode)

const parentDiv = document.getElementById('email').parentNode; // email id olan input un bir üst elemanı div i getirdi
console.log(parentDiv);

const emailInput = document.getElementById('email');
console.log(emailInput);

parentDiv.insertBefore(newDiv, emailInput) // newDiv i email input un önüne aldı

//----------------children---------

console.log(first3.children); //first3 div in altındaki tüm elementleri getirir
console.log(first3.children[0]); //first3 div in altındaki ilk div i getirdi
console.log(first3.firstElementChild); // buda first3 div in altındaki ilk div i getirdi

// select kısmını kendimiz ekleyelim--------------------------

let positionDiv = ["Position", "Junior Web Developer", "Senior Web Developer", "Project Manager"]
let jobList = document.getElementById("job-list")

// for (let i = 0; i < positionDiv.length; i++) {
//     jobList.innerHTML += `<option> ${positionDiv[i]}</option>`
// }
// console.log(jobList);

// yada-----inner html ile bu şekilde de eklenebilir

// jobList.innerHTML = `<option>A</option> <option>B</option> <option>C</option> `

//yada--for of kullanımı ile

//  for (element of positionDiv) {
//     jobList.innerHTML += `<option> ${element}</option>`
// }

//yada--for each kullanımı ile
positionDiv.forEach(element => jobList.innerHTML += `<option value='${element}'> ${element}</option>`)

//change event-------------------------------------
const position = document.getElementById('position')

jobList.addEventListener("change", function() {
    position.innerText = `you selected ${jobList.value}`
})




// ---styling

// const button = document.getElementById("submit");
// button.style.width = '24%'
// button.style.height = "5vh"
// button.style.backgroundColor = "antiquewhite"
// button.style.borderRadius = "15px"

// yada
// button.style.cssText = `
//     width : 25%;
//     height: 5vh;
//     background-color: antiquewhite;
//     border-radius: 15px
// `


// -----------------------------------------------------------------------------



const lstName = document.getElementById("last-name")
const charCount = document.getElementById("char-count")
const maxLenght = lstName.getAttribute("max-length")

const showRemaninChar = () => {
    // console.log(lstName.value.length)
    // const val = lastName.value
    // charCount.innerText = lastName.value.length + "/" + maxLenght
    if (lstName.value.length == 0) {
        charCount.style.display = "none"
    } else {
        // console.log("else")
        charCount.style.display = "inline"
        charCount.innerText = lstName.value.length + "/" + maxLenght
    }
}

lastName.addEventListener("keyup", showRemaninChar)







// --------------Events-----------------------------------------------

// load-onload-------------------------


// window.onload()=>{

// }

// window.addEventListener('load',function(){// tüm js i buraya yapıştırabşlşrşz

// })
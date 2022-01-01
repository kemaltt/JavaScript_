// ASYNCHRONOUS

// AJAX -> Asynchronous JavaScript and XML
// API -> Application Programming Interface
// const counteriesContainer = document.querySelector(".countries")
// const request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v2/name/germany")
// request.send()

// request.addEventListener("load", function() {
//     //console.log(this.responseText);
//     // const data = JSON.parse(this.responseText)[0]//yada
//     const [data] = JSON.parse(this.responseText)
//     console.log(data);

//     const content = `
//     <div class="card country" style="width: 18rem;">
//                 <img class="country-image card-img-top" src="${data.flag}">
//                 <div class="country-data card-body">
//                     <h5 class="country-name card-title">${data.name}</h3>
//                         <h5 class="country-region card-title">${data.region}</h5>
//                         <p class="country-row card-text">${data.population}</p>
//                         <p class="country-row card-text">${data.languages[0].name}</p>
//                         <p class="country-row card-text">${data.currencies[0].name}</p>
//                 </div>
//             </div>

//     `
//     counteriesContainer.insertAdjacentHTML("beforeend", content)
// })

// --------------------------------------------------------------------------
// --------------Birden fazla ülke çağırmak için

// const counteriesContainer = document.querySelector(".countries")

// function getCountries(country) {
//     const request = new XMLHttpRequest();

//     request.open("GET", `https://restcountries.com/v2/name/${country}`)
//     request.send()

//     request.addEventListener("load", function() {
//         //console.log(this.responseText);
//         // const data = JSON.parse(this.responseText)[0]//yada
//         const [data] = JSON.parse(this.responseText)
//         console.log(data);

//         const content = `
//         <div class="card country" style="width: 18rem;">
//                     <img class="country-image card-img-top" src="${data.flag}">
//                     <div class="country-data card-body">
//                         <h5 class="country-name card-title">${data.name}</h3>
//                             <h5 class="country-region card-title">${data.region}</h5>
//                             <p class="country-row card-text">${data.population}</p>
//                             <p class="country-row card-text">${data.languages[0].name}</p>
//                             <p class="country-row card-text">${data.currencies[0].name}</p>
//                     </div>
//                 </div>

//         `
//         counteriesContainer.insertAdjacentHTML("beforeend", content)
//         counteriesContainer.style.opacity = 1
//     })
// }

// getCountries('turkey')
// getCountries('germany')
// -----------------------------------------------------------------------------------------------------------------

const counteriesContainer = document.querySelector(".countries");

function renderCountry(data) {
    const content = ` 
    <div class="card country" style="width: 18rem;">
                <img class="country-image card-img-top" src="${data.flag}">
                <div class="country-data card-body">
                    <h5 class="country-name card-title">${data.name}</h3>
                        <h5 class="country-region card-title">${data.region}</h5>
                        <p class="country-row card-text">${data.population}</p>
                        <p class="country-row card-text">${data.languages[0].name}</p>
                        <p class="country-row card-text">${data.currencies[0].name}</p>
                </div>
            </div>
    
    `;
    counteriesContainer.insertAdjacentHTML("beforeend", content);
    counteriesContainer.style.opacity = 1;
}

// Callback Hell----------------------------------------

// function getCountriesAndneighbours(country) {
//     const request = new XMLHttpRequest();

//     request.open("GET", `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener("load", function() {
//         //console.log(this.responseText);
//         // const data = JSON.parse(this.responseText)[0]//yada
//         const [data] = JSON.parse(this.responseText);
//         renderCountry(data);
//         // console.log(data);

//         const neighbours = data.borders[0]
//             // console.log(neighbours);


//         const request2 = new XMLHttpRequest();

//         request2.open("GET", `https://restcountries.com/v2/alpha/${neighbours}`);
//         request2.send();

//         request2.addEventListener("load", function() {
//             const data2 = JSON.parse(this.responseText)
//             renderCountry(data2)
//         })
//     });
// }

// getCountriesAndneighbours("portugal");

// FETCH---------------------------------------------------------------------------------

const req = fetch('https://restcountries.com/v2/name/portugal')
console.log(req); //Promise {<pending>}

// Promise Lifecycle Events
// pending 
// settled -> fulfilled , rejected
// consuming promise 

// CONSUME 

function getCountryData(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        // .then(function(res) {
        //     // console.log(res.json());
        //     return res.json()
        // }).then(function(response) {
        //     console.log(response);
        //     renderCountry(response[0])
        // })
        .then(res => {
            console.log(res)
            if (!res.ok) throw new Error(`Country not found ${res.status}`)
            return res.json()
        })
        .then(response => {
            renderCountry(response[0])
            const neighbour = response[0].borders[0]
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
        })
        .then(data => data.json())
        .then(neighbour => renderCountry(neighbour))
        .catch(err => console.log(err.message))
}
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => getCountryData("portugal"))

// -------------------------------------------------------------------------------------------

async function getData() {

}
const getCountry = async function() {
    const res = await fetch(`https://restcountries.com/v2/name/germany`)
    console.log(res);
    const data = await res.json()
    console.log(data[0]);
}
getCountry()
console.log('first');
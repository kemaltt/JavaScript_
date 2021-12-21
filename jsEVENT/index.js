// const colorChangeFunction = () => {
//     let button = document.querySelector('#colorChangeButton')
// }



// const colorChangeFunction = (element, background, text) => {
//     element.style.backgroundColor = background;
//     element.style.color = text;

// }
// ----------addEventListener-----------------------------------------------------------------------------------------
const button = document.querySelector('#btn');
console.log(button);

// button.addEventListener('click', () => {
//     console.log('clicked')
// })

// button.addEventListener('click', function(params) {
//     console.log('clicked')

// })
// ------------------------------------
// const consoleClick = () => {
//     console.log('clicked');
// }

// button.addEventListener('click', consoleClick);

// const consoleClick = () => {
//     console.log('hi');
// }

// button.addEventListener('click', () => consoleClick())

// -----------------------------------------------------------
const div = document.querySelector('.square')

console.log(div)

// div.addEventListener('dblclick', function() {
//     div.style.backgroundColor = 'orange'
// })
// iki kere tıklayıca renk orange



div.addEventListener('mouseenter', function() {
    div.style.backgroundColor = 'orange'
})
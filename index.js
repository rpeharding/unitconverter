/*
meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//steps- 
// define variables for button and input el
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let lengthEl = document.getElementById("length-el") 
let volEl = document.getElementById("vol-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGal = 0.264
const kgToPound = 2.204

//listen for clicks
inputBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    lengthEl.innerHTML = `<p>${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)} meters </p>`
    
    volEl.innerHTML = `<p>${baseValue} liters = ${(baseValue * literToGal).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue / literToGal).toFixed(2)} liters  </p>`
    
    massEl.innerHTML = `<p>${baseValue} kg = ${(baseValue * kgToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue / kgToPound).toFixed(2)} kg  </p>`
    
    // on click - get number from input field
// convert number from m>f and f>m
// convert number from l>g and g>l
// convert number from kg>p and p>g 
// target paragraph from each card
//use inner html to talk to each of the paragraphs
// round the numbers down to 2 dp 
})

// useful? Number(totalPrice).toFixed(2)
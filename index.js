// javascript
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



const btnEl = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")
const meterFeet = document.getElementById("meter-feet")
const literGallon = document.getElementById("liter-gallon")
const kiloPound = document.getElementById("kilo-pound")




btnEl.addEventListener("click", function(){
   
    meterFeet.innerHTML = ` 
                     <p>${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | 
                     ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters</p>
      `
      
       literGallon.innerHTML = ` 
                     <p>${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | 
                     ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters</p>
      `
      
       kiloPound.innerHTML = ` 
                     <p>${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | 
                     ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos</p>
      `
    
})

let leng = document.getElementById("leng")
let vol = document.getElementById("vol")
let mass = document.getElementById("mass")
function get_value(){
    const value = document.getElementById("inp").value
    let cm = value*100
    let km = value/1000
    let gal = (value*0.264172).toFixed(2)
    let ml = value*1000
    let pounds = (value*2.20462).toFixed(2)
    let grams = (value*1000)
    leng.innerHTML = `<p>${value} meters = ${cm} centimeters |
     ${value} meters = ${km} kilometers  </p> `
     vol.innerHTML = `<p>${value} liters = ${gal} galoons |
      ${value} liters = ${ml} milliliters </p>`
     mass.innerHTML = `<p>${value} kilos = ${pounds} pounds | 
     ${value} kilos  = ${grams} grams`
}
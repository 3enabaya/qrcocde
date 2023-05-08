let button =document.getElementById('submit')
let input = document.querySelector('.input')
let image = document.querySelector('img')
let card = document.getElementById('card')
let form = document.getElementById('qr')
let value = input.value

button.onclick = function(){
    let data = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=value${value}`
    image.src = data
    input.value =""
}


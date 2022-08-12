const api = "https://api.adviceslip.com/advice"
let contenedor = document.getElementById("contenedor")
let idAdvice = document.getElementById("advice-id")
let advice = document.getElementById("advice")
let button = document.getElementById("button-refresh")

const apiAdvice = () => {

    contenedor.style.animationName = "None"

    fetch(api)
    .then(res => res.json())
    .then(data => {
        idAdvice.innerHTML = `advice #${data.slip.id}`
        advice.innerHTML = `“${data.slip.advice}”`
        contenedor.style.animationName = "update"
    })

}

window.addEventListener("load", apiAdvice)
button.addEventListener("click", apiAdvice)
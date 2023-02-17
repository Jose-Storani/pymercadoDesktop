let opcionOtro = document.getElementById("opcionOtro")
let contentOtro = document.getElementById("contentOtro");

opcionOtro.addEventListener("click",() => {
    opcionOtro.innerText = "CAMBIADO"
})

let buttonPrueba = document.getElementById("buttonPrueba");
buttonPrueba.addEventListener("click", () => {
    alert("el boton funciona")
})

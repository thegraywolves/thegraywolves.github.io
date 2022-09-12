let efecto = document.getElementById("invoker");
let afectado = document.getElementById("photo-banner");
let afectado2= document.getElementById("photo-container");
let afectado3= document.getElementById("texto-gif-2")
efecto.addEventListener("mouseover", () => {
  afectado.style.display="none"
  afectado2.style.display="block"
  afectado2.style.opacity=1
  afectado3.style.opacity=1
}, false)
efecto.addEventListener("mouseout", () => {
  afectado.style.display="block"
  afectado2.style.display="none"
  afectado2.style.opacity=0
  afectado3.style.opacity=0
}, false)

let efecto1 = document.getElementById("photo");
efecto1.addEventListener("mouseover", () => {
  afectado.style.display="none"
  afectado2.style.display="block"
  afectado2.style.opacity=1
}, false)
efecto1.addEventListener("mouseout", () => {
  afectado.style.display="block"
  afectado2.style.display="none"
  afectado2.style.opacity=0
}, false)


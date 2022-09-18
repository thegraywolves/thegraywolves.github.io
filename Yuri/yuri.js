if (window.matchMedia("(min-width: 800px)").matches){
let efecto = document.getElementById("Block");
let afectado = document.getElementById("photo-banner");
let afectado2= document.getElementById("photo-container");
    

efecto.addEventListener("mouseover", () => {

  afectado.style.display="none"
  afectado2.style.display="block"
  afectado2.style.opacity=1

}, false)
efecto.addEventListener("mouseout", () => {

  afectado.style.display="block"
  afectado2.style.display="none"
  afectado2.style.opacity=0

}, false)


let efecto2=document.getElementById("photo")

efecto2.addEventListener("mouseover", () => {

    afectado.style.display="none"
    afectado2.style.display="block"
    afectado2.style.opacity=1

}, false)

efecto2.addEventListener("mouseout", () => {

    afectado.style.display="block"
    afectado2.style.display="none"
    afectado2.style.opacity=0

}, false)

let efecto3=document.getElementById("div-juegos-titulo")
efecto3.addEventListener("mouseover", () => {

    afectado.style.display="none"
    afectado2.style.display="block"
    afectado2.style.opacity=1

}, false)
efecto3.addEventListener("mouseout", () => {

    afectado.style.display="block"
    afectado2.style.display="none"
    afectado2.style.opacity=0

}, false)


let efecto4=document.getElementById("audioYuri")
efecto4.addEventListener("mouseover", () => {

    afectado.style.display="none"
    afectado2.style.display="block"
    afectado2.style.opacity=1
    
}, false)
efecto4.addEventListener("mouseout", () => {

    afectado.style.display="block"
    afectado2.style.display="none"
    afectado2.style.opacity=0

}, false)
}


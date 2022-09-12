let efecto = document.getElementById("Block");
let afectado = document.getElementById("photo-banner");
let afectado2= document.getElementById("photo-container");
efecto.addEventListener("mouseover", () => {
  /*efecto.style.backgroundColor="red"*/
  /*afectado.className = "photo-container"*/
  afectado.style.display="none"
  afectado2.style.display="block"
  afectado2.style.opacity=1
  /*photo-banner.style.visibility="hidden";*/
}, false)
efecto.addEventListener("mouseout", () => {
  /*afectado.className = "";*/
  afectado.style.display="block"
  afectado2.style.display="none"
  afectado2.style.opacity=0
}, false)


let efecto2=document.getElementById("photo")
efecto2.addEventListener("mouseover", () => {
    /*efecto.style.backgroundColor="red"*/
    /*afectado.className = "photo-container"*/
    afectado.style.display="none"
    afectado2.style.display="block"
    afectado2.style.opacity=1
    /*photo-banner.style.visibility="hidden";*/
}, false)
efecto2.addEventListener("mouseout", () => {
    /*afectado.className = "";*/
    afectado.style.display="block"
    afectado2.style.display="none"
    afectado2.style.opacity=0
}, false)

let efecto3=document.getElementById("div-juegos-titulo")
efecto3.addEventListener("mouseover", () => {
    /*efecto.style.backgroundColor="red"*/
    /*afectado.className = "photo-container"*/
    afectado.style.display="none"
    afectado2.style.display="block"
    afectado2.style.opacity=1
    /*photo-banner.style.visibility="hidden";*/
}, false)
efecto3.addEventListener("mouseout", () => {
    /*afectado.className = "";*/
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
    /*afectado.className = "";*/
    afectado.style.display="block"
    afectado2.style.display="none"
    afectado2.style.opacity=0
}, false)
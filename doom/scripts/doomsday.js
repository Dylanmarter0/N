const CambioDeTexto = () => {
    let NuevoTexto = document.getElementById("texto");
    NuevoTexto.textContent = "Hola mundo!";
}
const CambioDeColor = () => {
    let NuevoColor = document.querySelector("ColorN");
    ColorN.style.backgroundColor="red";
}
const MostrarAlerta = () => {
    alert('Has hecho click!');
}
const OcultarMostrar = () => {
    let ElementoDiv=document.getElementById("ElementoDiv");
    let MiBoton=document.getElementById("MiBoton");
    if (ElementoDiv.hidden) {
        ElementoDiv.hidden=false;
        MiBoton.textContent = "Ocultar div";
      } else {
        ElementoDiv.hidden=true;
        MiBoton.textContent = "Mostrar div";
      }
}
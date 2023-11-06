const buttonHome = document.getElementById("button-home")
const buttonNosotros = document.getElementById("button-nosotros")
const buttonArtistas = document.getElementById("button-artistas")
const buttonProyectos = document.getElementById("button-proyectos")
const buttonInicio = document.getElementById("button-iniciar")


const sectionHome = document.getElementById("section-home")
const sectionNosotros = document.getElementById("section-nosotros")
const sectionArtistas = document.getElementById("section-artistas")
const sectionProyectos = document.getElementById("section-proyectos")
const sectionPrincipal = document.getElementById("section-principal")
const sectionInitial = document.getElementById("section-initial")

buttonHome.addEventListener("click", activeSectionHome)
buttonNosotros.addEventListener("click", activeSectionNosotros)
buttonArtistas.addEventListener("click", activeSectionArtistas)
buttonProyectos.addEventListener("click", activeSectionProyectos)
buttonInicio.addEventListener("click", activeSectionInicio)

function iniciarPage(){
    sectionHome.style.display = "none"
    sectionNosotros.style.display = "none"
    sectionArtistas.style.display = "none"
    sectionProyectos.style.display = "none"
    sectionPrincipal.style.display = "block"
    
}
function activeSectionInicio(){
    sectionInitial.style.display = "block"
    sectionHome.style.display = "none"
    sectionNosotros.style.display = "none"
    sectionArtistas.style.display = "none"
    sectionProyectos.style.display = "none"
    console.log("Todo ok en Inicio")
}
function activeSectionHome(){
    sectionInitial.style.display = "none"
    sectionNosotros.style.display = "none"
    sectionArtistas.style.display = "none"
    sectionProyectos.style.display = "none"
    sectionHome.style.display = "block"
    console.log("Todo ok en Home")
}

function activeSectionNosotros(){
    sectionInitial.style.display = "none"
    sectionHome.style.display = "none"
    sectionNosotros.style.display = "block"
    sectionArtistas.style.display = "none"
    sectionProyectos.style.display = "none"
    console.log("Todo ok en Nosotros")
}

function activeSectionArtistas(){
    sectionInitial.style.display = "none"
    sectionHome.style.display = "none"
    sectionNosotros.style.display = "none"
    sectionArtistas.style.display = "block"
    sectionProyectos.style.display = "none"
    console.log("Todo ok en Artistas")
}

function activeSectionProyectos(){
    sectionInitial.style.display = "none"
    sectionHome.style.display = "none"
    sectionNosotros.style.display = "none"
    sectionArtistas.style.display = "none"
    sectionProyectos.style.display = "block"
    console.log("Todo ok en Proyectos")
}
window.addEventListener("load", iniciarPage)
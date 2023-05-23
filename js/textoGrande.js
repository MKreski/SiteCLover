
var respostaSim = document.querySelector("#resposta-sim")
var btnSim = document.getElementById("btn-sim")
btnSim.addEventListener("click", btnSimP)
function btnSimP(){
    respostaSim.classList.add("active")
    respostaNao.classList.remove("active")
}
var respostaNao = document.querySelector(".resposta-nao1")
var btnNao = document.getElementById("btn-nao")
btnNao.addEventListener("click", btnNaoP)
function btnNaoP(){
    respostaSim.classList.remove("active")
    respostaNao.classList.add("active")
}



function scrollaArrowHome() {
    console.log("chegou 1");
        
    var iconSeta = document.querySelector(".fa-circle-arrow-up");
    
    if (scrollY > 50) {
        iconSeta.classList.add("active")
    }
    else {
        iconSeta.classList.remove("active")
    }
    
}
window.addEventListener('scroll', scrollaArrowHome);
console.log("Inicio");

// iconSeta.addEventListener("Click", () => {
//     respostaSim.contains.classList.remove("active")
//     btnSim.classList.remove("active")
//     })
function scrollToTop() {
    respostaSim.classList.remove("active")
    respostaNao.classList.remove("active")
}


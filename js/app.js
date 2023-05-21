var coracao_off = document.querySelector("#coracao-off");
var coracao_on = document.querySelector("#coracao-on");

function favoritar() {
    coracao_off.classList.toggle("ativo");
    coracao_on.classList.toggle("ativo");
}

coracao_off.addEventListener('click', favoritar);
coracao_on.addEventListener('click', favoritar);
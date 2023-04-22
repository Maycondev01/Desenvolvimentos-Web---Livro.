function calcularFuso() {
    var inHora = document.getElementById("inHora");
    var resultado = document.getElementById("resultado");

    var horaBrasil = Number(inHora.value);

    if(horaBrasil == "" || isNaN(horaBrasil)) {
        alert("Por favor, selecione uma hora correta!");
        inHora.focus();
        return;
    }

    var horaFranca = horaBrasil + 5;

    if(horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    resultado.textContent = `O Horário na França é: ${horaFranca.toFixed(2)}`
}


function limpar() {
    location.reload();
}


var btnExibir = document.getElementById("exibir");
btnExibir.addEventListener("click", calcularFuso);

var btnLimpa = document.getElementById("atualizar");
btnLimpa.addEventListener("click", limpar);

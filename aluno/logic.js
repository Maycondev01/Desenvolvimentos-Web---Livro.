function mostrarMedia() {
    var inNome = document.getElementById("nome");
    var inNota1 = document.getElementById("nota1");
    var inNota2 = document.getElementById("nota2");

    var inMedia = document.getElementById("media");
    var resultado = document.getElementById("resultado")
    
    
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    var media = (nota1 + nota2) / 2;

    inMedia.textContent = `A média do aluno(a): ${nome} é de ${media}`

    if(media < 6) {
        resultado.textContent = `Aluno(a): ${nome} foi reprovado!`;
        resultado.style.color = "red";
    } else if(media > 6 && media <= 10) {
        resultado.textContent = `Aluno(a): ${nome} foi aprovado!`;
        resultado.style.color = "green";
    } else if(media = 6) {
        resultado.textContent = `Aluno(a): ${nome} foi reprovado!`;
        resultado.style.color = "#000"
    } else {
        resultado.textContent = "Digite um número!"
    }
}


var exibir = document.getElementById("exibir");
exibir.addEventListener("click", mostrarMedia)
function verificarIdade() {
    let idade = document.getElementById('idade').value;
    let resultado = document.getElementById('resultado');

    if (idade === "") {
        resultado.textContent = "Sistema errou.";
        resultado.style.color = "red";
    } else {
        idade = parseInt(idade);

        if (idade < 1) {
            resultado.textContent = "Idade inválida.";
            resultado.style.color = "red";
        } else if (idade >= 1 && idade < 10) {
            resultado.textContent = "Você é uma criança.";
            resultado.style.color = "green";
        } else if (idade >= 10 && idade < 15) {
            resultado.textContent = "Você é um adolescente.";
            resultado.style.color = "blue";
        } else if (idade >= 15 && idade < 25) {
            resultado.textContent = "Você é um jovem.";
            resultado.style.color = "orange";
        } else if (idade >= 25 && idade < 60) {
            resultado.textContent = "Você é um adulto.";
            resultado.style.color = "purple";
        } else if (idade >= 60) {
            resultado.textContent = "Você é um idoso.";
            resultado.style.color = "gray";
        } else {
            resultado.textContent = "Sistema errou.";
            resultado.style.color = "red";
        }
    }
}
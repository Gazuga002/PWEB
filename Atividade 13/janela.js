let janela = document.getElementById("janela");
let titulo = document.getElementById("titulo");

let janelaQuebrada = false;

janela.onmouseover = function() {
    if (janelaQuebrada === false) {
        janela.src = "janelaaberta.jpg";
        titulo.innerText = "Janela Aberta";
    }
};

janela.onmouseout = function() {
    if (janelaQuebrada === false) {
        janela.src = "janelafechada.jpg";
        titulo.innerText = "Janela Fechada";
    }
};

janela.onclick = function() {
    janela.src = "janelaquebrada.jpg";
    titulo.innerText = "Janela Quebrada";
    janelaQuebrada = true; 
    alert("Você quebrou a Janela! A janela nunca mais será a mesma! :(");
};
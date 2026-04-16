do {

    var escolhajogador = prompt("Escolha Pedra Papel ou Tesoura ").toUpperCase();
    alert("Você escolheu: "+ escolhajogador);
    if (escolhajogador != "PEDRA" && escolhajogador != "PAPEL" && escolhajogador != "TESOURA") {
        alert("Opção inválida! Aprende a jogar meu nobre.");

    }

}while (escolhajogador != "PEDRA" && escolhajogador != "PAPEL" && escolhajogador != "TESOURA");


let aleatorio = Math.random();

let escolhapc;

if (aleatorio <= 0.33) {
    escolhapc = "PEDRA";
} else if (aleatorio > 0.33 && aleatorio <= 0.66) {
    escolhapc = "PAPEL"
} else if (aleatorio > 0.66) {
    escolhapc = "TESOURA"
}

let resultado;

if (escolhajogador == escolhapc) {
    resultado = "EMPATE MEU NOBRE"
} else if (
    (escolhajogador === "PEDRA" && escolhapc === "TESOURA") ||
    (escolhajogador === "TESOURA" && escolhapc === "PAPEL") ||
    (escolhajogador === "PAPEL" && escolhaComputador === "PEDRA")) {

    resultado = "VOCÊ GANHOU!";
} else {
    resultado = "VOCÊ PERDEU!"
}

alert("Você escolheu: " + escolhajogador + "!" +
    "\nO super computador quântico escolheu: " + escolhapc + "!" +
    "\nO resultado da batalha lendária: " + resultado + "!"
)








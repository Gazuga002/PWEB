function retornarMaior(a, b, c) {
    return Math.max(a, b, c);
}

function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

function ehPalindromo(texto) {
    let limpo = texto.toLowerCase().replace(/\s+/g, '');
    let invertido = limpo.split('').reverse().join('');
    return limpo === invertido ? "É palíndromo" : "Não é palíndromo";
}

function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2 || palavra1.trim() === "" || palavra2.trim() === "") {
        return "erro";
    }
    if (palavra1.toLowerCase().includes(palavra2.toLowerCase())) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

function diaDaSemana(dataString) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const data = new Date(dataString.replace(/-/g, '\/'));
    return dias[data.getDay()];
}

let opcao = prompt("Escolha a função (1 a 5):\n1- Maior de 3\n2- Ordem Crescente\n3- Palíndromo\n4- Subconjunto\n5- Dia da Semana");

switch (opcao) {
    case "1":
        let n1 = parseFloat(prompt("Número 1:"));
        let n2 = parseFloat(prompt("Número 2:"));
        let n3 = parseFloat(prompt("Número 3:"));
        alert("O maior é: " + retornarMaior(n1, n2, n3));
        break;
    case "2":
        let x1 = parseFloat(prompt("Número 1:"));
        let x2 = parseFloat(prompt("Número 2:"));
        let x3 = parseFloat(prompt("Número 3:"));
        alert("Ordem: " + ordemCrescente(x1, x2, x3));
        break;
    case "3":
        let texto = prompt("Digite a palavra ou frase:");
        alert(ehPalindromo(texto));
        break;
    case "4":
        let p1 = prompt("Palavra principal:");
        let p2 = prompt("Palavra para buscar:");
        alert(verificarSubconjunto(p1, p2));
        break;
    case "5":
        let dataInput = prompt("Digite a data (AAAA-MM-DD):");
        alert("Dia da semana: " + diaDaSemana(dataInput));
        break;
    default:
        alert("Opção inválida.");
}
let Arraypesquisa = [];
const QTD_PESSOAS = 3;

for (let i = 0; i < QTD_PESSOAS; i++) {
    alert(`Bem vindo à pesquisa entrevistado n° ${i + 1}`);

    let idade = parseInt(prompt("Digite a sua idade:"));
    let sexo = prompt("Digite seu sexo: \n(F-Feminino)\n(M-Masculino)\n(O-Outros)").toUpperCase();
    let opiniao = parseInt(prompt("Opinião: \n(1-Péssimo)\n(2-Regular)\n(3-Bom)\n(4-Ótimo)"));

    Arraypesquisa.push({
        idade: idade,
        sexo: sexo,
        opiniao: opiniao
    });
}

let somaIdades = 0;
let maiorIdade = -Infinity;
let menorIdade = Infinity;
let qtdePessimo = 0;
let qtdeOtimoBom = 0;
let numMulheres = 0;
let numHomens = 0;
let numOutros = 0;

for (let i = 0; i < Arraypesquisa.length; i++) {
    let pessoa = Arraypesquisa[i];

    somaIdades += pessoa.idade;
    if (pessoa.idade > maiorIdade) maiorIdade = pessoa.idade;
    if (pessoa.idade < menorIdade) menorIdade = pessoa.idade;

    if (pessoa.opiniao === 1) {
        qtdePessimo++;
    }
    if (pessoa.opiniao === 3 || pessoa.opiniao === 4) {
        qtdeOtimoBom++;
    }

    switch (pessoa.sexo) {
        case 'F':
            numMulheres++;
            break;
        case 'M':
            numHomens++;
            break;
        default:
            numOutros++;
            break;
    }
}

let mediaIdade = (somaIdades / Arraypesquisa.length);
let porcentagemOtimoBom = ((qtdeOtimoBom / Arraypesquisa.length) * 100);

alert(`--- RESULTADO DA PESQUISA --- \n
    Média das idades: ${mediaIdade} anos \n
    Pessoa mais velha: ${maiorIdade} anos \n
    Pessoa mais nova: ${menorIdade} anos \n
    Quantidade de 'Péssimo': ${qtdePessimo} \n
    Porcentagem de 'Ótimo' e 'Bom': ${porcentagemOtimoBom}% \n
    Número de Mulheres: ${numMulheres} \n
    Número de Homens: ${numHomens} \n
    Número de Outros: ${numOutros}`);

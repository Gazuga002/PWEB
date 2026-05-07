//1. Super mega blaster Retângulo

function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

let baseInput = parseFloat(prompt("Digite a base do retângulo:"));
let alturaInput = parseFloat(prompt("Digite a altura do retângulo:"));

let Retangulo1 = new Retangulo(baseInput, alturaInput);
alert("A área do retângulo é: " + Retangulo1.calcularArea());

// 2. Classes com Herança (Conta Bancária)
class Conta {
    constructor() {
        this._nomeCorrentista = "";
        this._banco = "";
        this._numeroConta = "";
        this._saldo = 0;
    }

    get nomeCorrentista() { return this._nomeCorrentista; }
    set nomeCorrentista(value) { this._nomeCorrentista = value; }

    get banco() { return this._banco; }
    set banco(value) { this._banco = value; }

    get numeroConta() { return this._numeroConta; }
    set numeroConta(value) { this._numeroConta = value; }

    get saldo() { return this._saldo; }
    set saldo(value) { this._saldo = value; }
}

class Corrente extends Conta {
    constructor() {
        super();
        this._saldoEspecial = 0;
    }
    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(value) { this._saldoEspecial = value; }
}

class Poupanca extends Conta {
    constructor() {
        super();
        this._juros = 0;
        this._dataVencimento = "";
    }

    get juros() { return this._juros; }
    set juros(value) { this._juros = value; }

    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(value) { this._dataVencimento = value; }
}


let cc = new Corrente();
cc.nomeCorrentista = prompt("Nome do Correntista (Conta Corrente):");
cc.banco = prompt("Banco:");
cc.numeroConta = prompt("Número da Conta:");
cc.saldo = parseFloat(prompt("Saldo inicial:"));
cc.saldoEspecial = parseFloat(prompt("Limite de Saldo Especial:"));

alert(`CONTA CORRENTE:\nNome: ${cc.nomeCorrentista}\nBanco: ${cc.banco}\nConta: ${cc.numeroConta}\nSaldo: ${cc.saldo}\nEspecial: ${cc.saldoEspecial}`);

let cp = new Poupanca();
cp.nomeCorrentista = prompt("Nome do Correntista (Poupança):");
cp.banco = prompt("Banco:");
cp.numeroConta = prompt("Número da Conta:");
cp.saldo = parseFloat(prompt("Saldo inicial:"));
cp.juros = parseFloat(prompt("Taxa de Juros:"));
cp.dataVencimento = prompt("Data de Vencimento (DD/MM):");

alert(`CONTA POUPANÇA:\nNome: ${cp.nomeCorrentista}\nBanco: ${cp.banco}\nConta: ${cp.numeroConta}\nSaldo: ${cp.saldo}\nJuros: ${cp.juros}\nVencimento: ${cp.dataVencimento}`);
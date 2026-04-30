class GordaoOuMagrao {
    constructor() {
        this._altura = 0;
        this._peso = 0;
    }

    setAltura(value) {
        this._altura = parseFloat(value);
    }

    getAltura() {
        return this._altura;
    }

    setPeso(value) {
        this._peso = parseFloat(value);
    }

    getPeso() {
        return this._peso;
    }

    calcularIMC() {
        let altura = this.getAltura();
        let peso = this.getPeso();
        return peso / (altura ** 2);
    }

    gerarResultado() {
        let imc = this.calcularIMC();
        let classificacao = "";
        let grau = "";

        if (imc < 18.5) {
            classificacao = "MAGREZA";
            grau = "0";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = "NORMAL";
            grau = "0";
        } else if (imc >= 25.0 && imc <= 29.9) {
            classificacao = "SOBREPESO";
            grau = "I";
        } else if (imc >= 30.0 && imc <= 39.9) {
            classificacao = "OBESIDADE";
            grau = "II";
        } else {
            classificacao = "OBESIDADE GRAVE";
            grau = "III";
        }

        return `Seu IMC é: ${imc.toFixed(2)}\nClassificação atual: ${classificacao}\nGrau de Obesidade: ${grau}\n`;
    }
}

let objIMC = new GordaoOuMagrao();

objIMC.setAltura(prompt("Digite sua altura: "));
objIMC.setPeso(prompt("Digite o seu peso: "));

alert(objIMC.gerarResultado());
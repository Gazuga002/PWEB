        let nome;
        let n1;
        let n2;
        let n3;
        let n4;
        let media;

        nome = prompt("Informe o seu nome");

        n1 = parseFloat(prompt("informe a nota 1"));
        n2 = parseFloat(prompt("informe a nota 2"));
        n3 = parseFloat(prompt("informe a nota 3"));
        n4 = parseFloat(prompt("informe a nota 4"));

        media= ((n1+n2+n3+n4)/4);

        alert(nome +", sua média é: "+ media.toFixed(2));



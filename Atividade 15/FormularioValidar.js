function validar() {
    let formElements = document.formularioPrincipal.elements;

    // 1. Validação do Nome 
    let nome = formElements["idNome"].value;
    if (nome.trim().length < 10) {
        alert("O Nome não pode ter menos que 10 caracteres.");
        formElements["idNome"].focus(); 
        return false;
    }

    // 2. Validação do E-mail (verificar se está vazio)
    let email = formElements["idEmail"].value;
    if (email.trim() === "") {
        alert("Por favor, preencha o campo E-mail.");
        formElements["idEmail"].focus();
        return false;
    }

    // 3. Validação do Comentário (mínimo 20 caracteres)
    let comentario = formElements["idComentario"].value;
    if (comentario.trim().length < 20) {
        alert("O Comentário deve ter no mínimo 20 caracteres.");
        formElements["idComentario"].focus();
        return false;
    }


    //4. Validação dos radios e Pesquisa
    let radiosPesquisa = formElements["opcaoPesquisa"];
    let opcaoSelecionada = "";
    
    for (let i = 0; i < radiosPesquisa.length; i++) {
        if (radiosPesquisa[i].checked) {
            opcaoSelecionada = radiosPesquisa[i].value;
            break;
        }
    }

    // 5. Mensagens finais baseadas na resposta da pesquisa
    if (opcaoSelecionada === "Não") {
        alert("Que bom que você voltou a visitar esta página!");
    } else if (opcaoSelecionada === "Sim") {
        alert("Volte sempre à está página!"); 
    }

    return true;
}
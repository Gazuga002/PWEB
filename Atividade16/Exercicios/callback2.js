function exibeMsgnNaOrdem (mensagem,callback){
    console.log(mensagem);
    callback();
}
exibeMsgnNaOrdem('Essa é a primeira mensagem exibida na ordem', function(){
                                                                console.log('Essa é a segunda mensagem exibida na ordem');}
);
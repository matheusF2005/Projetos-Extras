function Acertou(){
    var Você = "Você";
    var Acertou = "Acertou!";

    alert(Você + " " + Acertou);
}

function Errou(){
    var Você = "Você";
    var Errou = "Errou!";

    alert(Você + " " + Errou);
}

function Resposta(){
    var resposta_digitada = prompt("Digite aqui a sua resposta");

    var resultado = resposta_digitada == "Patrick Stewart";

    alert(resultado);
}

function desenvolvimento(){
    var vilao1 = "Johan Liebert";
    var vilao2 = "Muzan";
    var vilao3 = "Kaguya";

    var vilao_respondido = prompt("Digite no campo abaixo um dos três.");

    var vilao_resposta = vilao_respondido == vilao1;

    if(vilao_resposta){
        alert("Meus Parabéns! Você Acertou!");
    }else{
        alert("Você não tem um bom gosto para vilões.");
    }
}

function musicageek(){
    const musica_digitada = prompt("Digite aqui a música.");
    switch (musica_digitada) {
        case "A Peste (Isis Vasconcellos)": alert("Bela Escolha!");
            break;
        case "Sob Meu Controle (Mystery)":  alert("Ótima Escolha!");
            break;
        case "Controle (Anny)": alert("Bela Escolha");
            break;
        case "Demônio Controle (M4rkim)": alert("Bela Escolha!")
        
        default: alert("Você digitou uma música que não é da Makima ou não está catalogada nesse quiz, tente outra vez.");
    }
}

function holden() {
    var nome = prompt("Escreva na caixa abaixo")

    return nome
}

function holden_while(){
    var resposta = holden()

    while (resposta !== "Juiz Holden") {
        alert("Você Errou! Tente Novamente")
    
        resposta = prompt("Tente Novamente")
    }

    alert("Você Acertou!")
}


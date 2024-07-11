//Aula 2
function atencao() {
    console.log( typeof "Testando");   
}

function BomDia() {
    console.log("Bom Dia");
}

function BoaTarde() {
    console.log("Boa Tarde");
}

function BoaNoite() {
    console.log("Boa Noite");
}

function nome() {
    var nome;
    nome = "José de Almeida dos Santos";
    alert(nome);
    console.log(typeof nome);
}

function materia() {
    var materia;
    materia = "Geografia";
    alert(materia);
    console.log( typeof materia);
}

function idade() {
    var idade;
    idade = 16;
    idade = 18
    alert(idade);
    console.log(typeof idade);
}
//Aula 2

//Aula 3
function literal() {
    var numero = 15;
    console.log(numero);
}

function expressao() {
    var calculo = 2 + 5 + 7 * 10 - 8;
    alert(calculo);
}

function expressao2() {
    var calculo2 = 10 + 9 - 6 + (9 + 5) * 15 + 3;
    alert(calculo2);
}

function valorvariavel() {
    var operando = 15;
    var resultado = operando + 5 + 10;
    alert(resultado);
}

function variavel() {
    var num1 = 5;
    var num2 = 7;
    num1 = num2
    console.log(num1, num2);
}

function apresentacao() {
    var nomecompleto = prompt("Qual é o seu Nome Completo?")

    alert("Seja bem vindo" + " " + nomecompleto)
}

function constante() {
    const sobrenome = "Firmino";
    
    alert(sobrenome);
}

function Pai() {
    var nome3 = "Marcos";

    nome3 = "Firmino";

    alert(nome3);
}
//Aula 3

//Aula 4
function relacional1() {
    var senha_digitada = prompt("Qual é a senha?");

    var correta_ou_errada = senha_digitada == "abc123";

    alert(correta_ou_errada);
    console.log(correta_ou_errada);
}

function turma() {
    var todos_os_alunos = 15;
    var media_dos_alunos = todos_os_alunos / 2;

    var quantos_alunos = prompt("Quantos alunos tem na aula?");

    var resposta = quantos_alunos > media_dos_alunos;

    alert("A maioria dos alunos está na sala?");

    alert(resposta);
}

function estrita() {
    var palavra_e_numero = "100";
    var numero = 100;

    var comparacao = palavra_e_numero == numero;

    var comparacao_estrita = palavra_e_numero === numero;

    console.log(comparacao);
    console.log(comparacao_estrita);
}

function tarde() {
    var horario_digitado = prompt("Qual é o horário atual?");

    var comparacao_de_horarios = horario_digitado >= 12 && horario_digitado <= 18;

    alert("Ainda posso desejar Boa Tarde?");

    alert(comparacao_de_horarios);
}

function voto() {
    var idade = prompt("Quantos anos você têm?");

    var facultativo = idade >= 18 && idade <= 70;

    alert("Você têm que votar?");

    alert(facultativo);
}

function emancipacao() {
    var genero_digitado = prompt("Qual é o seu genero?");

    var idade_digitada = prompt("Quantos anos você tem?")

    var resultado_emancipacao = genero_digitado == "Masculino" && idade_digitada >= 18 || 
                                genero_digitado == "Feminino"  && idade_digitada >= 21;

    alert("Você pode ser independente dos pais?");

    alert(resultado_emancipacao);
}

//Aula 4

//Aula 5
function limite() {
    var limite_de_pessoas = 20;
    var limite_pergunta = prompt("Quantas pessoas tem na sala nesse momento?");

    var limite_comparacao = limite_pergunta == limite_de_pessoas;

    if (limite_comparacao) {
        alert("Limite atingindo!");
    }
 }

function arlivre() {
    var temperatura = 32;
    var chovendo = "Não";

    var temperatura_pergunta = prompt("Qual é a temperatura?");
    var chovendo_pergunta = prompt("Está chovendo?");

    var temperatura_resposta = temperatura_pergunta < 32;
    var chovendo_resposta = chovendo_pergunta == chovendo;

    if(temperatura_resposta && chovendo_resposta){
        alert("Podemos fazer alguma atividade!")
    }else{
        alert("Não podemos fazer alguma atividade!")
    }
 }

function sudeste(){
    var capital_de_origem = prompt("Em qual capital do Sudeste Brasileiro você nasceu?");

    var maiuscula_e_minuscula = capital_de_origem.toLocaleUpperCase();

    switch (capital_de_origem) {
        case "RJ": alert("Você é do Rio de Janeiro!");
            break;
        case "MG": alert("Você é de Minas Gerais!");
            break;
        case "SP": alert("Você é de São Paulo!");
            break;
        case "ES": alert("Você é do Espírito Santo!");
            break;

        default: alert("Você não é da Região Sudeste")
    }
}

//Aula 5

//Aula 6

function notas() {
    var nota1 = prompt("Digite a primeira nota do aluno:");
    var nota2 = prompt("Digite a segunda nota do aluno:");

    parametro(nota1, nota2);
}

function parametro (ex1, ex2) {
    
    var media = ex1 && ex2 / 2;

    if(media > 6){
        alert("O aluno for aprovado");
    }else{
        alert("O aluno está na recuperação.")
    }

}

function dinheiro() {
    var valor1 = prompt("Digite o dinheiro: ");

    var mudanca = parseInt(valor1);

    return mudanca;
}

function retorno() {
    var valor_recebido = dinheiro();

    if (valor_recebido > 7) {
        alert("Você não tem dividas");
    }else{
        alert("Você ainda tem dividas");
    }

}

function arredondar() {
    var numero_exemplo1 = prompt("Digite um número decimal: ");

    var arredondar = Math.round(numero_exemplo1);

    alert(arredondar);
}

function decimal_para_real() {
    var numero_exemplo2 = prompt("Digite um número decimal: ");

    var cortar_decimal = Math.trunc(numero_exemplo2);

    alert(cortar_decimal);
}

function aleatorio() {
    var numero_exemplo3 = prompt("Digite um número: ");

    var aleatorio = Math.random(numero_exemplo3);

    alert(aleatorio);
}

function minimo() {
    var numero_comparacao1 = prompt("Digite um número: ");
    var numero_comparacao2 = prompt("Digite outro número: ");
    var numero_comparacao3 = prompt("Digite mais um número: ");

    var num_minimo = Math.min(numero_comparacao1, numero_comparacao2, numero_comparacao3);

    alert(num_minimo);
}

function maximo() {
    var numero_comparacao4 = prompt("Digite um número: ");
    var numero_comparacao5 = prompt("Digite outro número: ");
    var numero_comparacao6 = prompt("Digite mais um número: ");

    var num_maximo = Math.max(numero_comparacao4, numero_comparacao5, numero_comparacao6);

    alert(num_maximo);
}

function maiuscula() {
    var texto = "bendy";

    var maiuscula = texto.toUpperCase();

    alert(maiuscula);
}

function minuscula() {
    var texto = "BENDY";

    var minuscula = texto.toLowerCase();

    alert(minuscula);
}

function espaco() {
    var texto_ex = prompt("Digite um texto alatório com um espaço: ");

    var espaco = texto_ex.trim();

    alert(espaco);
}

function copiar_parte() {
    var texto_exemplo = "Super Mario Odyssey";

    var copiar = texto_exemplo.substring( 6, 11 );

    alert(copiar);
}

function trecho() {
    var texto_exemplo = "Super Mario Odyssey";

    var pegar = texto_exemplo.indexOf("Odyssey");

    alert(pegar);
}

function gasolina(){
    var preco_digitado = prompt("Digite o valor correspondido em decimal: ");

    var conversao = parseFloat(preco_digitado);

    var remocao = conversao.toFixed(1);

    alert(remocao);
}

function moedas() {
    var valor_digitado = prompt("Digite o valor: ");

    var troca = parseFloat(valor_digitado);

    var retirar_decimal = Math.trunc(troca);

    alert(retirar_decimal);
}

function primeira_letra() {
    var nome_digitado = prompt("Digite o seu nome: ");

    var avaliacao = nome_digitado.substring(0,1).toLocaleUpperCase();

    var vogal = avaliacao == "A" || avaliacao == "E" || avaliacao == "I" || avaliacao == "O" || avaliacao == "U";

    return vogal
}

function primeira_letra_atribuicao() {
    var nome_recebido = primeira_letra();

    if (nome_recebido) {
        alert("O seu dia é na segunda.");
    }else{
        alert("O seu dia é na terça.");
    }

}

//Aula 6 

//Exercícios em Grupo Aula 7
function amigo_mais_forte() {
    var nome1 = prompt("Digite o nome da primeira pessoa:");
    var altura1 = prompt("Digite a altura alcançada por" + " " + nome1);
    var nome2 = prompt("Digite o nome da segunda pessoa:");
    var altura2 = prompt("Digite a altura alcançada por" + " " + nome2);
    var nome3 = prompt("Digite o nome da terceira pessoa:");
    var altura3 = prompt("Digite a altura alcançada por" + " " + nome3);

    var altura_para_numero1 = parseInt(altura1);
    var altura_para_numero2 = parseInt(altura2);
    var altura_para_numero3 = parseInt(altura3);

    if (altura_para_numero1 >= altura_para_numero2 && altura_para_numero1 >= altura_para_numero3) {
        alert(nome1 + " " + "arremessou mais alto");
    } else if (altura_para_numero2 >= altura_para_numero1 && altura_para_numero2 >= altura_para_numero3) {
        alert(nome2 + " " + "arremessou mais alto");
    } else if (altura_para_numero3 >= altura_para_numero1 && altura_para_numero3 >= altura_para_numero2) {
        alert(nome3 + " " + "arremessou mais alto");
    }
}

function calculadora() {
    var n1 = prompt("Digite um número: ");
    var n2 = prompt("Digite outro número: ");

    var int1 = parseInt(n1);
    var int2 = parseInt(n2);

    var soma = int1 + int2;
    var subtracao = int1 - int2;
    var multiplicacao = int1 * int2;
    var divisao = int1 / int2;

    alert("Os resultados são:" + " " + "Soma:" + " " + soma + " " + "Subtração:" + " " + subtracao + " " + "Multiplicação" + " " + multiplicacao + " " + "Divisão:" + " " + divisao);
}

function cara_ou_coroa() {
    var numero_aleatorio = Math.random().toFixed(1);

    if (numero_aleatorio % 2 === 0) {
        alert("Cara");
    } else{
        alert("Coroa");
    }

}

function celsius_para_farenheit() {
    var temperatura_digitada = prompt("Digite a temperatura em Celsius: ");
    var transicao = parseInt(temperatura_digitada);

    var calculo_farenheit = transicao * 1.8 + 32;

    alert("A temperatura em Farenheit é:" + " " + calculo_farenheit);
}

function copa() {
    var time_digitado = prompt("Digite o time que está participando da Copa: ").toLocaleUpperCase();
    var info

    switch (time_digitado) {
        case "BOL":
            info = "BOL 2 x 0 PER data: 16/11/2023";
            break;
        case "VEN":
            info = "VEN 0 x 0 EQU data: 16/11/2023";
            break;
        case "COL":
            info = "COL 2 x 1 BRA data: 16/11/2023";
            break;
        case "ARG":
            info = "ARG 0 x 2 URU data: 16/11/2023";
            break;
        case "CHI":
            info = "CHI 0 x 0 PAR data: 16/11/2023";
            break;
        case "PAR":
            info = "PAR 0 x 1 COL data: 21/11/2023";
            break;
        case "URU":
            info = "URU 3 x 0 BOL data: 21/11/2023";
            break;
        case "EQU":
            info = "EQU 1 x 0 CHI data: 21/11/2023";
            break;
        case "BRA":
            info = "BRA 0 x 1 ARG data: 21/11/2023";
            break;
        case "PER":
            info = "PER 1 X 1 VEN data: 21/11/2023";
            break;
        default: alert("Esse time não está na Copa. Tente novamente");
            break;
    }
    alert(info);
}

function multi_temperaturas() {
    var temperatura_escolhida = prompt("Digite a medida desejada (°C ou °F): ");
    var temperatura_desejada = prompt("Digite a temperatura: ");

    var conversao = parseInt(temperatura_desejada); 

    if (temperatura_escolhida === "C") {
        var calculo_celsius = (conversao - 32) / 1.8;
        alert(" A temperatura em Celsius é:" + " " + calculo_celsius);
    } else if (temperatura_escolhida === "F"){
        var calculo_farenheit = conversao * 1.8 + 32;
        alert(" A temperatura em Fahrenheit é:" + " " + calculo_farenheit);
    }
}

function sorvete() {
    var sabor_sorvete = prompt("Digite o sabor do sorvete que você deseja (Baunilha, Chocolate, Creme, Flocos)");
    var confirmacao1 = confirm("Você deseja um complemento? (até 2 opções)");
    var preco = 5.9;

    if (confirmacao1 === true){
        var complemento_escolha = prompt("Qual complemente você deseja? (Farofa Doce, Paçoca, Calda de Caramelo, Bolacha de Chocolate)");
        var confirmacao2 = confirm("Você deseja outro complemento?");
        
        if (confirmacao2 === true) {
            var complemento_escolha2 = prompt("Qual complemente você deseja? (Farofa Doce, Paçoca, Calda de Caramelo, Bolacha de Chocolate)");
            preco += 4
        } else {
        preco += 2
        }   
    } 
   

    alert("O preço total foi de: " + "R$" + preco.toFixed(2));
}

//Exercícios em Grupo Aula 7

//Aula 8
    function gentileza() {
        console.log("Bom Dia");
        console.log("Boa Tarde");
        console.log("Boa Noite");
    }
    
    function primeira_letra_nome(){
        var n = prompt("Digite o seu Nome: ");

        parametro_letra(n)
    }

    function parametro_letra(nome) {
        console.log(nome.substring(0,1).toLowerCase());
    }

    function multiplicacao(){
        var n1 = prompt("Digite um número:");
        var n2 = prompt("Digite outro número:");

        var troca1 = parseInt(n1);
        var troca2 = parseInt(n2);

        alert(multiplicacao_conta(troca1, troca2));
    }

    function multiplicacao_conta(num1, num2) {
        return num1 * num2;
    }

    function bolsa_de_valores(codigo, valor, quantidade) {
        switch (codigo) {
            case "6534": 
                return valor * quantidade
                break;
            case "9351": 
                return valor * quantidade
                break;
            case "5040": 
                return valor * quantidade
                break;
            default:
                break;
        }

        console.log(bolsa_de_valores("6534", 15, 10) + " Reais");
        console.log(bolsa_de_valores("9351", 15, 5) + " Reais") ;
        console.log(bolsa_de_valores("5040", 15, 15) + " Reais");
    }
//Aula 8

//Exercícios em Grupo Aula 8
function salario() {
    var salario_recebido = parseInt(prompt("Digite o seu salário atual: "));

    reajuste(salario_recebido);
}

function reajuste(salario_reajuste) {
    var reajuste = salario_reajuste + (salario_reajuste * 0.15);

    alert("O seu salário agora é de: " + "R$" + reajuste);
}

function poupanca() {
    var poupanca_recebida = parseInt(prompt("Digite o valor da sua poupança:"));

    juros_simples(poupanca_recebida);
    juros_compostos(poupanca_recebida);
}

function juros_simples(poupanca_simples) {
    var juros_simples = poupanca_simples * 0.05 * 2;

    var montante_simples = poupanca_simples + juros_simples;

    alert("O valor agora é de: " + "R$" + montante_simples + " após 2 meses")
}

function juros_compostos(poupanca_composta) {
    var juros_compostos = poupanca_composta * (1 + 0.05)**2;

    var montante_composto = juros_compostos - poupanca_composta;

    alert("O valor agora é de: " + "R$" + montante_composto + " após 2 meses")
}

function divisao(){
    var valor_digitado = parseInt(prompt("Digite um número:"));

    var divisao = valor_digitado / 3;

    var resto = valor_digitado % 3;

    alert("O quociente da divisão é " + divisao + " e o resto é: " + resto);
}

function quilos(){
    var quilos_recebidos = parseInt(prompt("Digite a quantidade de alimento em quilos:"));

    quilos_conta(quilos_recebidos)
}

function quilos_conta(quilos_para_dias) {
    var conta = quilos_para_dias / 0.05;
    
    alert("O seu alimento vai durar: " + conta + " dias.");
}

function reprovados_e_aprovados() {
    var turmaC = parseInt(prompt("Digite o percentual dos alunos que foram reprovados na Turma C:"));
    var turmaD = parseInt(prompt("Digite o percentual dos alunos que foram aprovados na Turma D:"));

    reprovados_turma_C_E_D(turmaC, turmaD);
}

function reprovados_turma_C_E_D(reprovadosC, aprovadosD){
    
    var conta_reprovadosC = reprovadosC * (60/100);

    var conta_aprovadosD = aprovadosD * (20/100);

    var conta_reprovadosD = 20 - conta_aprovadosD;
    
    alert("O numero de alunos reprovados na Turma C é de: " + conta_reprovadosC);

    alert("O numero de alunos reprovados na Turma D é de: " + conta_reprovadosD);

    total(conta_reprovadosC, conta_reprovadosD)
}

function total(numeroC, numeroD) {
    conta_total = numeroC + numeroD;

    alert("O total de alunos reprovados é de: " + conta_total);
}

function taxi(){
    var odometro_inicio = parseInt(prompt("Digite o número que o odômetro marcou no inicio do dia: "));
    var odometro_final = parseInt(prompt("Digite o número que o odômetro marcou no final do dia: "));
    var litros_gastos = parseInt(prompt("Digite a quantidade de litros de combustível: "));
    var renda_do_dia = parseFloat(prompt("Digite a quantidade de reais que você recebeu hoje: "));

    conta_Taxi(odometro_inicio, odometro_final, litros_gastos, renda_do_dia)
}

function conta_Taxi(odo_inicio, odo_final, litros, renda){
    var Km_por_litro = odo_final - odo_inicio / litros;
    var lucro_do_dia = renda - litros * 7.5;

    console.log("A média do consumo em Km/L é de: " + Km_por_litro);
    console.log("O lucro do dia foi de: " + lucro_do_dia);
}

//Exercícios em Grupo Aula 8

//Aula 9 
function FM() {
    var chamadas = " "

    while (chamadas != "Tech4FM é show!") {
        chamadas = prompt("Atenda o telefone!");

        if (chamadas != "Tech4FM é show!") {
            alert("Talvez na próxima você consiga")
        }
    }

    alert("Parabéns! Você ganhou a camiseta!")
}

function FM2() {
    do {
        var chamadas = prompt("Atenda o Telefone!")

        if (chamadas != "Tech4FM é show!") {
            alert("Talvez na próxima você consiga")
        }
        
    } while (chamadas != "Tech4FM é show!");

    alert("Parabéns! Você ganhou a camiseta!")
}

function contando10() {
    numero = 1
    contador = 0

    while (contador < 10) {
        console.log(numero + contador);
        contador = contador + 1
    }
}

function apostas() {
    var cont = 0
    var total = 0

    while (cont < 4) {
        var amigos = parseInt(prompt("Digite o valor da aposta"));
        total = total + amigos;
        
        cont = cont + 1;
    }

    console.log(total);
}

function apostas2() {
    var cont = 0
    var total = 0

    while (cont < 4) {
        var amigos = parseInt(prompt("Digite o valor da aposta"));
        total = total + amigos;
        
        cont++;
    }

    console.log(total);
}
//Aula 9

//Aula 10
function FMdefinido(){

    for (var i = 0; i < 5; i++) {
        var FMResposta = prompt("Bem vindos a Tech4FM");
        alert("Parabens! Você ganhou um par de ingressos para o cinema!");
    }

    alert("Limite de 5 pessoas ultrapassado")
}

function escondeEsconde(){
    for (var i = 20; i >= 3; i--) {
        alert(i);
    }

    alert("Lá vou eu!");
}

function FMEncadeamento(){
    for (var i = 0; i <= 3; i++) {
        for( var j = 0; i <= 2; i++){
            var FMResposta = prompt("Bem vindos a Tech4FM");
            if(FMResposta == "Tech4Me"){
                alert("Você Acertou!")
            }else{
                alert("Você tem mais uma tentativa")
            }
        }
    }
}

function sanduichesEacompanhamentos(){
    var acompanhamentosLista = []
    
    var preco = 2 

    var sanduichesPedido = prompt("Qual é o sabor do sanduíche que você quer?");

    for (var i = 0; i < 5; i++) {
        var acompanhamentos = prompt("Quais acompanhamentos você quer? (Máximo 5)");
        acompanhamentosLista.push(acompanhamentos);
        preco+=2
        if (acompanhamentos == "Concluir") {
            break;
        }
    }

    console.log("O pedido é de:" + sanduichesPedido + " " + acompanhamentosLista + " e o preço é de: " + preco);
}
//Aula 10

//Aula 11
function sapateira(){
    var sapato_numero = parseInt(prompt("Qual é o número do sapato que você deseja?"));

    switch (sapato_numero) {
        case 1:
            alert("Esse sapato é da Nike");
            break;
        case 2:
            alert("Esse sapato é da Converse");
            break;
        case 3:
        alert("Esse sapato é da Olympikus");
            break;
        case 4:
        alert("Esse sapato é da Adidas");
            break;
        case 5:
        alert("Esse sapato é da Beira Rio");
            break;
        default:
            alert("A sapateria só suporta 5 sapatos");
            break;
    }
}

function sapateiraArray(){
    var sapatos = ["Nike","Converse","Olympikus","Adidas","Beira Rio"];

    var sapato_numero = parseInt(prompt("Qual é o número do sapato que você deseja?"));

    switch (sapato_numero) {
        case 1:
            alert("Esse sapato é da " + sapatos[0])
            break;
        case 2:
            alert("Esse sapato é da " + sapatos[1])
            break;
        case 3:
            alert("Esse sapato é da " + sapatos[2])
            break;
        case 4:
            alert("Esse sapato é da " + sapatos[3])
            break;
        case 5:
            alert("Esse sapato é da " + sapatos[4])
            break;
        default:
            alert("A sapateria só suporta 5 sapatos");
            break;
    }
}

function sapateiraNumero(){
    var sapatos = ["Nike","Converse","Olympikus","Adidas","Beira Rio"];
    
    var sapatoDigitado = prompt("Digite o número correspondente ao sapato: ");

    alert("O sapato da posição " + sapatoDigitado + " pertence à: " + sapatos[sapatoDigitado - 1]);
    
}

function sorveteria(){
    var sorvetesEquantidades = ["Chocolate", 5,"Morango", 7, "Creme", 9];

    var sorvetePergunta = prompt("Qual sabor do sorvete você quer?");

    alert("O sorvete de " + sorvetePergunta + " ainda tem " + sorvetesEquantidades[5] + " deles");
}

function chamadaArray(){
    var alunos = [];

    for (var i = 0; i < 10; i++) {
        alunos[i] = prompt("Digite os alunos que estão na sala");
        if (alunos[i] === "") {
            break;
        }
        
    }

    console.log(alunos);
}
//Aula 11

//Extras
function conta_e_comparacao(){
    var expressao3 = 5 * 6 + 2 + 9 + 4 * 10 * 15;

    var comparacao_de_numeros = expressao3 < 100;

    alert(expressao3);

    alert("O resultado é menor que 100?");

    alert(comparacao_de_numeros);
}

function ator() {
    var ator_respondido = prompt("Qual ator interpretou o Alan Turing no filme O Jogo da Imitação?");

    var ator_resposta = ator_respondido == "Benedict Cumberbatch";

    alert(ator_resposta);
}

function livro_adaptacoes() {
    var adaptacoes = prompt("Quantas adaptações para o cinema o livro Assassinato no Expresso do Oriente tem?")

    var livro_resposta = adaptacoes == 2;

    alert(livro_resposta);
     
}

function godzilla() {
    const filmes = prompt("Quantos filmes o Godzilla têm?");

    var filmes_resposta = filmes == 32;

    alert(filmes_resposta);
}

function adaptacoes_diferente() {
    const ator_diferente = prompt("Digite um ator que NÃO interpretou o Khan Noonien Singh na franquia Star Trek");

    var diferenca = ator_diferente != "Ricardo Montalbán" && 
                    ator_diferente != "Benedict Cumberbatch";

    alert(diferenca);
}

function fatorial() {
    var n = parseInt(prompt("Digite um número para fazer o fatorial dele"));
    var fat = 1

    while (n>=1) {
        fat = fat * n
        n--
    }

    console.log(fat);
}
//Extras
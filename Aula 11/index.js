/*1. teste de números

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.");
    
}else{
    console.log("Não passou no teste.");
} 

a) O codigo verifica se o numero digitado é par ou impar
b) imprime "passou no teste" para numeros pares
c) Imprime "não passou no teste" para numeros impares*/

/*2. Mercado
let fruta = prompt("escolha uma fruta")
let preço
switch (fruta){
    case "Laranja":
        preço = 3.5
        break
        case "Maçã":
            preço = 2.25
            break
            case "Uva":
            preço = 0.30
            break
            case "Pêra":
            preço = 5.5
            break; //break para item c
            default:
            preço = 5
            break
}
console.log("o preço da fruta", fruta, "é","R$", preço);

a) Para verificar o preço das frutas
b) "o preço da fruta Maçã é R$ 2.25"
c) "o preço da fruta Pêra é R$ 5" sendo que o preço dela é 5.5 entao ele pegou o preço do "default:"/*

/*3. Mensagem secreta
const numero = Number(prompt("digite o primeiro numero."))


if(numero > 0){
    console.log("esse numero passou no teste");
    
    let mensagem = "essa mensagem é secreta!!!"
    }
 console.log(mensagem);
 
a) A primeira linha esta criando uma variavel const de 
numeros e com o prompt para exibir na tela do site como um alert
b) se o usuario digito o numero 10 essa mensagem aparecera "esse numero passou no teste"
c) Tem erro sim, pois não criamos uma variavel para a "mensagem"*/ 

/*4. Faça um programa que pergunta ao usuário qual a idade dele e imprima no
console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
let idade = prompt("Qual a sua idade?")

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para
number para isso.
idade = Number(idade)

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite
dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima
`"Você não pode dirigir."`

if (idade >= 18){
    console.log("voce pode dirigir.");
    
} else {


console.log("voce nao pode dirigir");
}
*/

/*5. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça
para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a
mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turno = prompt("em qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno):")

if(turno === "M"){
    console.log("bom dia!");
    
}else if (turno === "V"){
    console.log("boa tarde!");
    
}else if (turno === "N") {
console.log("boa noite!")
} else {
    console.log("turno invalido! por favor, digite M, V ou N");
    
}*/

/*6. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
let turno = prompt("Em qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno):");

switch (turno) {
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Noite!");
        break;
    default:
        console.log("Turno inválido! Por favor, digite M, V ou N.");
        break;
}*/

/*7. Considere a situação: você vai ao cinema com um amigo ou amiga, porém
ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o
ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o
gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha
outro filme :("

const generoFilme = prompt("Qual o gênero do filme que vocês vão assistir?");


const precoIngresso = prompt("Qual o preço do ingresso?");


precoIngresso = Number(precoIngresso);


if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}*/

/*Desafio 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir
a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele
vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens
"Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo
que o usuário colocou no input.

const generoFilme = prompt("qual o genero do filme que voces vao assistir?")
let preçoIngresso = prompt("qual o preço do ingresso?")

preçoIngresso = Number (preçoIngresso)

if (generoFilme ==="fantasia" && preçoIngresso < 15){

    const lanchinho = prompt ("qual lanchinho voce vai comprar (pipoca, chocolate, doces, etc)?")
    console.log("bom filme");
    console.log(`aproveite o seu ${lanchinho}!`);
}else{
    console.log("escolha outro filme :");
    
}*/

/*2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de
um estádio de futebol. Para esta compra, o usuário deve fornecer algumas
informações:
Nome completo; Tipo de jogo: IN indica internacional e DO indica doméstico;
Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI

indica final. Categoria: pode ser as opções 1, 2, 3 ou 4;
Quantidade de ingressos CONTINUA ->
let nomeCompleto = prompt("Digite seu nome completo:");
let tipoJogo = prompt("Digite o tipo de jogo: IN (internacional) ou DO (doméstico):").toUpperCase();
let etapaJogo = prompt("Digite a etapa do jogo: SF (semi-final), DT (decisão de terceiro lugar) ou FI (final):").toUpperCase();
let categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4:"));
let quantidadeIngressos = Number(prompt("Digite a quantidade de ingressos:"));


/* 3. Você foi contratado para criar um sistema de vendas de ingressos de jogos de
um estádio de futebol. Para esta compra, o usuário deve fornecer algumas
informações:
Nome completo; Tipo de jogo: IN indica internacional e DO indica doméstico;
Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI

indica final. Categoria: pode ser as opções 1, 2, 3 ou 4;
Quantidade de ingressos CONTINUA ->

let precoIngresso;
if (tipoJogo === "IN") {
    if (etapaJogo === "SF") {
        if (categoria === 1) precoIngresso = 1320;
        else if (categoria === 2) precoIngresso = 880;
        else if (categoria === 3) precoIngresso = 550;
        else if (categoria === 4) precoIngresso = 220;
    } else if (etapaJogo === "DT") {
        if (categoria === 1) precoIngresso = 660;
        else if (categoria === 2) precoIngresso = 440;
        else if (categoria === 3) precoIngresso = 330;
        else if (categoria === 4) precoIngresso = 170;
    } else if (etapaJogo === "FI") {
        if (categoria === 1) precoIngresso = 1980;
        else if (categoria === 2) precoIngresso = 1320;
        else if (categoria === 3) precoIngresso = 880;
        else if (categoria === 4) precoIngresso = 330;
    }
} else if (tipoJogo === "DO") {
    if (etapaJogo === "SF") {
        if (categoria === 1) precoIngresso = 660;
        else if (categoria === 2) precoIngresso = 440;
        else if (categoria === 3) precoIngresso = 330;
        else if (categoria === 4) precoIngresso = 170;
    } else if (etapaJogo === "DT") {
        if (categoria === 1) precoIngresso = 330;
        else if (categoria === 2) precoIngresso = 220;
        else if (categoria === 3) precoIngresso = 165;
        else if (categoria === 4) precoIngresso = 85;
    } else if (etapaJogo === "FI") {
        if (categoria === 1) precoIngresso = 1320;
        else if (categoria === 2) precoIngresso = 880;
        else if (categoria === 3) precoIngresso = 550;
        else if (categoria === 4) precoIngresso = 220;
    }
}


let valorTotal = precoIngresso * quantidadeIngressos;


if (tipoJogo === "IN") {
    valorTotal = valorTotal * 4.10; 
}


console.log("---- RECIBO ----");
console.log(`Nome: ${nomeCompleto}`);
console.log(`Tipo de jogo: ${tipoJogo === "IN" ? "Internacional" : "Doméstico"}`);
console.log(`Etapa do jogo: ${etapaJogo}`);
console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de ingressos: ${quantidadeIngressos}`);
console.log(`--- Preço por ingresso: R$ ${precoIngresso.toFixed(2)}`);
console.log(`--- Valor total: R$ ${valorTotal.toFixed(2)}`);*/

/*4. O seu sistema deve solicitar estas informações ao usuário, através do prompt .
Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o
valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso
multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada
ingresso. Lembrando que o valor de jogos internacionais é o mesmo de jogos
domésticos, mas seus preços devem ser multiplicados pelo valor do dólar
(considerar o dólar = R$5,65)

let nomeCompleto2 = prompt("Digite seu nome completo:");
let tipoJogo2 = prompt("Digite o tipo de jogo: IN (internacional) ou DO (doméstico):").toUpperCase();
let etapaJogo2 = prompt("Digite a etapa do jogo: SF (semi-final), DT (decisão de terceiro lugar) ou FI (final):").toUpperCase();
let categoria2 = Number(prompt("Digite a categoria: 1, 2, 3 ou 4:"));
let quantidadeIngressos2 = Number(prompt("Digite a quantidade de ingressos:"));


let precoIngresso;
if (etapaJogo === "SF") {
    if (categoria === 1) precoIngresso = 1320;
    else if (categoria === 2) precoIngresso = 880;
    else if (categoria === 3) precoIngresso = 550;
    else if (categoria === 4) precoIngresso = 220;
} else if (etapaJogo === "DT") {
    if (categoria === 1) precoIngresso = 660;
    else if (categoria === 2) precoIngresso = 440;
    else if (categoria === 3) precoIngresso = 330;
    else if (categoria === 4) precoIngresso = 170;
} else if (etapaJogo === "FI") {
    if (categoria === 1) precoIngresso = 1980;
    else if (categoria === 2) precoIngresso = 1320;
    else if (categoria === 3) precoIngresso = 880;
    else if (categoria === 4) precoIngresso = 330;
}


let valorTotal = precoIngresso * quantidadeIngressos;


if (tipoJogo === "IN") {
    valorTotal = valorTotal * 5.65; 
    precoIngresso = precoIngresso * 5.65;
}


console.log("---- RECIBO ----");
console.log(`Nome: ${nomeCompleto}`);
console.log(`Tipo de jogo: ${tipoJogo === "IN" ? "Internacional" : "Doméstico"}`);
console.log(`Etapa do jogo: ${etapaJogo}`);
console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de ingressos: ${quantidadeIngressos}`);
console.log(`--- Preço por ingresso: R$ ${precoIngresso.toFixed(2)}`);
console.log(`--- Valor total: R$ ${valorTotal.toFixed(2)}`);*/

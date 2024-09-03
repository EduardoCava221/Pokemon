/*1. let valor = 0
declaraçao de variavel  
for(let i = 0; i < 5; i++){
    valor += i
} laço for e iteraçoes do loop
console.log(valor);
impressao do valor no console
*/

/*2. const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] 
for (let numero of lista) {
    if (numero > 18){
        console.log(numero);
        
    }
}
a) o laço for of imprimira no console apenas os numeros da lista que sao
maiores que 18.

b) o laço for of nao fornece diretamente o indice dos elementos mais da para fornecer por for in
*/

/*3. const quantidadeTotal = Number(prompt("Digite a quantidade de linhas : "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha);
    quantidadeAtual++
}
  o resultado seria primeira linha com 1 asterisco, segunda com 2 asteriscos, 
  terceira com 3 astericos e quarta linha com 4 asteriscos*/

/*1. exercicio de escrita de codigo  
  let quantidadedePets = prompt("quantos bichinhos de estimaçao voce tem?")
  if (quantidadedePets == 0){
    console.log("que pena! voce pode adotar um pet!");
    
  }else{
    let nomesPets=[]
    for (let i = 0; i < quantidadedePets; i++) {
        let nomePet = prompt(`digite o nome do seu bichinho ${i+1}:`)
        nomesPets.push(nomePet)
    }
    console.log("nome dos seus bichinhos", nomesPets);
    
  }*/

/*2. a) const arrayOriginal = [10, 20, 30, 40, 50];
for (let numero of arrayOriginal){
    console.log(numero);
    
}
b) for (let numero of arrayOriginal){
    console.log(numero / 10);
    
}
c) let numerosPares = []
for (let numero of arrayOriginal){
    if(numero % 2 === 0){
        numerosPares.push(numero)
    }
}
console.log(numerosPares);

d) let arrayStrings = []
for (let i = 0; i < arrayOriginal.length; i++){
    arrayStrings.push(`o elemento do index ${i} é: ${arrayOriginal[i]}`)
} 
console.log(arrayStrings);

e) let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal [0]

for (let numero of arrayOriginal){
    if (numero > maiorNumero){
        maiorNumero = numero
    }
}
console.log("maior numero:",maiorNumero);
console.log("menor numero:", menorNumero);*/

/*
let numeroPensado = prompt("Insira o número que você está pensando (entre 1 e 100): ");
let tentativa;
let tentativas = 0;

while (true) {
    tentativa = prompt("Tente adivinhar o número: ");
    tentativas++;
    
    if (tentativa < numeroPensado) {
        console.log("Errrrrrrrou, é maior!");
    } else if (tentativa > numeroPensado) {
        console.log("Errrrrrrrou, é menor!");
    } else {
        console.log("Acertou!!");
        console.log("O número de tentativas foi: " + tentativas);
        break;
    }
}

let continuar = prompt("Deseja jogar novamente? (sim/não)").toLowerCase();
if (continuar === "sim") {
    numeroPensado = prompt("Insira o número que você está pensando (entre 1 e 100): ");
    tentativas = 0;
    while (true) {
        tentativa = prompt("Tente adivinhar o número: ");
        tentativas++;
        
        if (tentativa < numeroPensado) {
            console.log("Errrrrrrrou, é maior!");
        } else if (tentativa > numeroPensado) {
            console.log("Errrrrrrrou, é menor!");
        } else {
            console.log("Acertou!!");
            console.log("O número de tentativas foi: " + tentativas);
            break;
        }
    }
} else {
    console.log("Fim de jogo!");
}
/* Continuaçao desafio 1 
let numeroPensado = prompt("Insira o número que você está pensando (entre 1 e 100): ");
console.log("Vamos jogar!");

let tentativa;
let tentativas = 0;


while (true) {
    tentativa = prompt("Tente adivinhar o número: ");
    tentativas++;
    
    console.log("O número chutado foi: " + tentativa);
    
    if (tentativa < numeroPensado) {
        console.log("Errrrrrrrou, o número escolhido é maior!");
    } else if (tentativa > numeroPensado) {
        console.log("Errrrrrrrou, o número escolhido é menor!");
    } else {
        console.log("Acertou!!");
        console.log("O número de tentativas foi: " + tentativas);
        break; 
    }
}*/


/* Desafio 2
let numeroPensado = Math.floor(Math.random() * 100) + 1;
console.log("Vamos jogar!");

let tentativa;
let tentativas = 0;

while (true) {
    tentativa = prompt("Tente adivinhar o número: ");
    tentativas++;
    
    console.log("O número chutado foi: " + tentativa);
    
    if (tentativa < numeroPensado) {
        console.log("Errrrrrrrou, o número escolhido é maior!");
    } else if (tentativa > numeroPensado) {
        console.log("Errrrrrrrou, o número escolhido é menor!");
    } else {
        console.log("Acertou!!");
        console.log("O número de tentativas foi: " + tentativas);
        break; 
    }
}*/


 
/*let vida = 1;
let recursos = 0;
let rodadasExplorando = 0;

console.log("Início do jogo! Sua vida é: " + vida + " e você tem " + recursos + " recursos.");

while (vida > 0 && recursos < 10) {
    let acao = prompt("Escolha uma ação: 'explorar' ou 'descansar'");

    if (acao === "explorar") {
        rodadasExplorando++;
        let chance = Math.random();

        if (chance < 0.5) { 
            recursos++;
            console.log("Você encontrou um recurso! Total de recursos: " + recursos);
        } else if (chance < 0.75) { 
            console.log("Você encontrou um perigo! Cuidado!");
        } else { 
            vida--;
            console.log("Você encontrou um Gamemaker! Sua vida agora é: " + vida);
        }
    } else if (acao === "descansar") {
        vida++;
        console.log("Você descansou e agora tem " + vida + " vidas.");
    } else {
        console.log("Ação inválida. Escolha 'explorar' ou 'descansar'.");
    }
}

if (recursos >= 10) {
    console.log("Parabéns! Você coletou 10 recursos e sobreviveu!");
} else {
    console.log("Game over! Sua vida chegou a 0.");
}

console.log("Total de recursos coletados: " + recursos);
console.log("Número total de rodadas explorando: " + rodadasExplorando);*/
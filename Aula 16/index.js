/*1) INTERPRETAÇAO DE CODIGO
 function minhaFuncao(variavel){
    return variavel * 5
}
console.log(minhaFuncao(2));
console.log(minhaFuncao(10));*/
//a)10, que é o resultado de 2 * 5 e 50,que é o resultado de 10 * 5
//b) Se você apenas invocar minhaFuncao(2) e minhaFuncao(10) sem os console.log, nada será impresso no console. As funções seriam executadas e retornariam seus resultados, mas como o retorno não está sendo exibido (via console.log ou outra forma), o console ficaria vazio.

/*2) let textoDoUsuario = prompt("insira um texto")
const outraFunçao = function(texto){
    return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFunçao(textoDoUsuario)
console.log(resposta);*/
//a. A função converte o texto para minúsculas e verifica se contém a palavra "cenoura", retornando true ou false.

//b. Saídas no console:
//i. *true*  
//ii. *true*  
//iii. *false*

/*1) ESCRITA DE CODIGO
function sobreMim() {
    console.log("Eu sou Nicholas, tenho 24 anos, moro em Belo Horizonte e sou estudante.");
}

sobreMim();*/

/*2) a) funçao que soma dois numeros
function somar(n1, n2) {
    return n1 + n2;
}

const resultadoSoma = somar(5, 8);
console.log(resultadoSoma); // Imprime 13*/

/*b) Função que verifica se o primeiro número é maior ou igual ao segundo:

function maiorOuIgual(n1, n2) {
    return n1 >= n2;
}

const resultadoComparacao = maiorOuIgual(10, 8);
console.log(resultadoComparacao); // Imprime true*/

/*c) Função que verifica se um número é par:

function ehPar(numero) {
    return numero % 2 === 0;
}

const resultadoPar = ehPar(4);
console.log(resultadoPar); // Imprime true*/

/*d) Função que imprime o tamanho da mensagem e a versão em maiúsculas:

function processarMensagem(mensagem) {
    console.log(mensagem.length, mensagem.toUpperCase());
}

processarMensagem("Olá, como você está?"); 
// Imprime 21 OLÁ, COMO VOCÊ ESTÁ?*/

/*3) function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

const numero1 = Number(prompt("Insira o primeiro número:"));
const numero2 = Number(prompt("Insira o segundo número:"));

console.log("Números inseridos:", numero1, "e", numero2);
console.log("Soma:", somar(numero1, numero2));
console.log("Diferença:", subtrair(numero1, numero2));
console.log("Multiplicação:", multiplicar(numero1, numero2));
console.log("Divisão:", dividir(numero1, numero2));*/

//DESAFIO 1
/*const imprimir = parametro => {
    console.log(parametro);
};
const somarEImprimir = (valor1, valor2) => {
  const soma = valor1 + valor2;
  imprimir(soma);
};
somarEImprimir(12, 7);*/

//DESAFIO 2
/*function adicionarItem(inventario, item) {
    if (inventario.length >= 5) {
        console.log("O inventário está cheio. Não é possível adicionar mais itens.");
        return inventario; 
    }
    inventario.push(item);
    console.log(`Item "${item}" adicionado ao inventário.`);
    return inventario; 
}

function removerItem(inventario, item) {
    const index = inventario.indexOf(item);
    if (index === -1) {
        console.log(`O item "${item}" não foi encontrado no inventário.`);
        return inventario; 
    }
    inventario.splice(index, 1);
    console.log(`Item "${item}" removido do inventário.`);
    return inventario; 
}
function listarItens(inventario) {
    if (inventario.length === 0) {
        console.log("O inventário está vazio.");
    } else {
        console.log("Itens no inventário:");
        inventario.forEach(item => console.log(`- ${item}`));
    }
}


let inventario = [];

inventario = adicionarItem(inventario, "Espada");
inventario = adicionarItem(inventario, "Escudo");
inventario = adicionarItem(inventario, "Poção");
inventario = adicionarItem(inventario, "Armadura");
inventario = adicionarItem(inventario, "Mapa");
inventario = adicionarItem(inventario, "Lanterna"); 

listarItens(inventario);

inventario = removerItem(inventario, "Poção");
inventario = removerItem(inventario, "Capa"); 

listarItens(inventario);*/



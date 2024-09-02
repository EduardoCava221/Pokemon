/*exemplo 1 while 
let i = 0

while(i<=10){
    console.log("O numero é:", i);
    i++;
    
}
exemplo 2 while 
let estomago = 0
while(estomago < 100){
    console.log("quero comer mais coxinha",estomago);
    estomago = estomago + 10
    
}*/

/* exercicio while 
1) soma de numeros

let número = 10
let soma = 0
while (número !== 0){
    número = Number (prompt("digite um numero (0 para sair):"))
    soma += número
    console.log("o numero digitado foi ", número);
    
}
console.log("o valor total foi:",soma);*/

/*exemplo dowhile
let c = 1

do{
    console.log("O valor do contador é:", c);
    c++
    
}while(c <= 6)*/

/*exemplo for 
let numeros = [14, 67, 89, 15, 23]

for(let i= 0; i< 5;i++){
    const elemento = numeros[i]
    console.log(elemento);
    
}*/

/* exercicio 1 for
let numeros = [11, 15, 18, 14, 50, 13]
let numeroMaior = numeros[0]
for(let i= 0; i< 6;i++){
    if ( numeroMaior<numeros[i]){
numeroMaior=numeros[i]
    }
    
    

}
console.log("O maior número é:", numeroMaior);*/

/* exercicio 2 for
let numero = [11, 15, 18, 14, 12, 13]
let soma = 0 
for (let i = 0; i < numero.length; i++ ){
    if (numero[i] % 2 === 0){
        soma += numero[i]
    }
}
console.log("a soma dos numeros pares é " + soma);*/

/*exemplo for of

const numeros =  [14, 67, 89, 15, 23]
for(let numero of numeros ){
    console.log(numero);
    
}*/

/* exercicio 1 for of
const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let mensagem = ''
for(let palavra of palavras){
    mensagem += palavra + " "
    
}
console.log(mensagem);*/

/*const numeros = [11, 15, 18, 14, 12, 13]
let soma = 0
for(const numero of numeros){
    if(numero %2 === 0){
  soma += numero
    }
}
console.log("a soma dos  numeros pares é:", soma);*/


const palavras = ['sol', 'abrigo', 'computador', 'programação', 'javascript', 'desenvolvedor'];


let palavrasMaisLongas = [];

let comprimentoMaximo = 0;
for (const palavra of palavras) {
    if (palavra.length > comprimentoMaximo) {
        comprimentoMaximo = palavra.length;
    }
}
for (const palavra of palavras) {
    if (palavra.length === comprimentoMaximo) {
        palavrasMaisLongas.push(palavra);
    }
}
console.log(palavrasMaisLongas);
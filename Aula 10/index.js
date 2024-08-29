/* Exemplo 1
let condição1 = true

if(condição1) {
    //ação
    console.log("exibiu condição1");
    
}

let condição2 = false
if(condição2){
    //ação
}
console.log("exibiu condição2");*/

/* Exercicio 1



*/

/* Exemplo 2 
let condição = false
if(condição){
    console.log("a condiçao é verdadeira");
    
}else{
    console.log("a condiçao é falsa");
    
}*/

/* Exercicio 2
const num1 = Number (prompt("digite um numero"))
const num2 = Number (prompt("Digite outro numero"))
if(num1 === num2){
    console.log("os numeros sao iguais");
    
}else{
    console.log("os numeros sao diferentes");
    
}*/

/* Exemplo 3
let condição1 = false
let condição2 = true
if(condição1){
    console.log("condiçao1 é verdadeiro");
    }else if(condição2) {
    console.log("condiçao2 é falsa");
}else{
    console.log("entrou no else");
    
}*/

/* Exercicio 3
const num1 = Number (prompt("digite um numero"))
const num2 = Number (prompt("digite outro numero"))

if(num1===num2){
    console.log("os numeros sao iguais");
}else if (num1>num2){
console.log("o numero1 é maior que o numero2");

}else{
    console.log("o numero1 é menor que o numero2");
    
}*/

/* Switch Case Exemplo 
let paisDeOrigem = prompt("DIGITE O PAIS DE ORIGEM")

switch(paisDeOrigem){
    case 'Brasil' :
        console.log("brasileiro");
    break
    case 'EUA':
        console.log("Norte Americano");
        break
    case 'Inglaterra'
    :console.log("Ingles");
    break
    default :
    console.log("nenhum pais encontrado");
}*/

/* Exercicio Pokemon
const pokemon = prompt("digite o nome do pokemon")
switch(pokemon){
    case "Bulbasaur":
        console.log("o pokemon escolhido foi o Bulbasaur do tipo planta e venenoso");
        break
        case "Charmander":
            console.log("o pokemon escolhido foi o charmander do tipo fogo");
            break
            case "Squirtle":
            console.log("o pokemon escolhido foi o Squirtle do tipo água");
        }*/

/* Exercicio Hogwarts
const aluna = prompt("um aluno de Hogwarts")
switch(aluna){
    case "Hermione":
    console.log("Hermione é da casa Grifinória");
    
    break
    case "Ana":
    console.log("Lufa-lufa");
    break
    case "Luna":
        console.log("Corvinal");
        break
        case "Narcisa":
            console.log("Sonserina");
            break
            
        
    
    
    
}*/

/* Exemplo 
let condiçao1 = true
let condiçao2 = false
if(condiçao1 && condiçao2){
    console.log("As duas condiçoes sao verdadeiras");
    
}else{
console.log("Alguma condiçao é falsa");

}
if(condiçao1 || condiçao2){
    console.log("todas sao falsas");
    
}
if (condiçao1 ){
    console.log("a condiçao1 é falsa");
    
}else{
    console.log("a condiçao1 é verdadeira");
    
}*/

/*let ensMedio = prompt('Você terminou o Ensino Médio?')
if(ensMedio.toLowerCase() === 'sim') {
  ensMedio = true
}

let deMaior = prompt('Você tem mais de 18 anos?')
if(deMaior.toLowerCase() === 'sim') {
deMaior = true
}

let outraFac = prompt('Você está cursando outra faculdade?') 
if(outraFac.toLowerCase() === 'não') {
  outraFac = true
} else {
  outraFac = false
}

if(ensMedio&&deMaior&&outraFac) {
console.log('Você pode cursar na nossa faculdade')
}
*/

/* desafio

let choose = Math.floor(Math.random()*3)
// console.log(choose)

let jokenpo = prompt('Escolha entre Pedra, Papel ou Tesoura')
console.log(Você escolheu ${jokenpo})

switch (choose) {
  case 0:
    console.log('Seu inimigo escolheu Tesoura')
    break

  case 1: 
    console.log('Seu inimigo escolheu Papel')
    break

  case 2:
    console.log('Seu inimigo escolheu Pedra')
}

if(jokenpo.toLowerCase() === 'pedra' && choose===0) {
  console.log('Pedra amassa Tesoura, você ganhou!!')
} else if(jokenpo.toLowerCase() === 'pedra' && choose===1) {
  console.log('Papel enrola Pedra, você perdeu!!')
} else if(jokenpo.toLowerCase()=== 'pedra' && choose===2) {
  console.log('Pedra empata com pedra, vocês empataram!!')
}

if(jokenpo.toLowerCase() === 'tesoura' && choose===0) {
  console.log('Tesoura não corta tesoura, vocês empataram!!')
} else if(jokenpo.toLowerCase() === 'tesoura' && choose===1) {
  console.log('Tesoura corta papel, você ganhou!!')
} else if(jokenpo.toLowerCase()=== 'tesoura' && choose===2) {
  console.log('Pedra amassa tesoura, você perdeu!!')
}

if(jokenpo.toLowerCase() === 'papel' && choose===0) {
  console.log('Tesoura corta papel, você perdeu!!')
} else if(jokenpo.toLowerCase() === 'papel' && choose===1) {
  console.log('Papel não enrola papel, vocês empataram!!')
} else if(jokenpo.toLowerCase()=== 'papel' && choose===2) {
  console.log('Papel enrola pedra, você ganhou!!')
}*/   




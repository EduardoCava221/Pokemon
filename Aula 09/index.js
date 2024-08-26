/* 1) 
let Array;
//DECLARA A VARIAVEL ARRAY.
console.log('a. ', Array);
//IMPRIME O TEXTO "a. " SEGUINDO DO VALOR DA VARIAVEL ARRAY, QUE É INDEFINIDA
Array = null
//atribuição de null a array
console.log('C. ',Array.length);
// acesso a propriedade length*/

/* 2)
Array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//inicialização do array
console.log('c. ', Array.length);
//impressão do comprimento do array*/

/* 3) 
const frase = prompt("Digite uma frase")
//entrada do usuário
//console.log(frase.toUpperCase().replaceAll("A", "I",), frase.length);
//toUpperCase:Converte todos os caracteres para maiúsculas
//replaceAll: substitui todas as ocorrências da letra "A" por "I"
//length: retorna o comprimento da string, ou seja, o número total de caracteres.

//o console ira imprimir: "Subi num onibus em Mirrocos 27".
Solicita o nome do usuário
const nome = prompt("Digite seu nome:");

// Solicita o e-mail do usuário
const email = prompt("Digite seu e-mail:");

// Exibe a mensagem de sucesso
console.log (`O email ${email} foi cadastrado com sucesso. Seja. bem-vinda(o), ${nome}!`)*/

/* 4)
const comidasPreferidas = ['Pizza', 'Sushi', 'Hamburguer', 'Feijoada', 'Pastel'];

console.log('Array completo:', comidasPreferidas);

console.log('Essas são as minhas comidas preferidas:');
comidasPreferidas.forEach(comida => console.log(comida));

const comidaUsuario = prompt('Digite uma comida preferida:');
comidasPreferidas[1] = comidaUsuario;

console.log('Nova lista de comidas preferidas:');
comidasPreferidas.forEach(comida => console.log(comida));*/

/* 5)
const listaDeTarefas = [];


for (const i = 0; i < 3; i++) {
    const tarefa = prompt(`Digite a tarefa ${i + 1}:`);
    listaDeTarefas.push(tarefa);
}


console.log("Lista de Tarefas:", listaDeTarefas);


const indiceRealizado = parseInt(prompt("Digite o índice da tarefa que você já realizou (0, 1 ou 2):"));


if (indiceRealizado >= 0 && indiceRealizado < listaDeTarefas.length) {
    listaDeTarefas.splice(indiceRealizado, 1);
} else {
    console.log("Índice inválido. Nenhuma tarefa foi removida.");
}


console.log("Lista de Tarefas Atualizada:", listaDeTarefas);*/
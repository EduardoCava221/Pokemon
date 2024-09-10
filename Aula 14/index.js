/*1. Contador Simples:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/

/*2. Contador de Pares:

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}*/

/*3. Tabuada:

const numero = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
    console.log(${numero} x ${i} = ${numero * i});
}*/

/*4. Soma de Números:

let soma = 0;

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("Digite um número:"));
    soma += numero;
}

console.log("Total da soma:", soma);*/

/*5. Média de Notas:

let somaNotas = 0;

for (let i = 0; i < 5; i++) {
    const nota = Number(prompt("Digite a nota do aluno:"));
    somaNotas += nota;
}

const media = somaNotas / 5;
console.log("Média das notas:", media);*/

/*6. Jogo da forca
const palavras = ["javascript", "programacao", "desenvolvimento", "computador"];
const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
const letrasAdivinhadas = new Set();
const tentativasMaximas = 6;

function jogoForca(tentativasRestantes) {
    const exibicaoPalavra = palavraEscolhida.split('').map(letra => letrasAdivinhadas.has(letra) ? letra : '_').join(' ');
    console.log(exibicaoPalavra);
    
    if (!exibicaoPalavra.includes('_')) {
        console.log("Parabéns, você adivinhou a palavra!");
        return;
    }

    if (tentativasRestantes <= 0) {
        console.log("Você perdeu! A palavra era:", palavraEscolhida);
        return;
    }

    const letra = prompt("Digite uma letra:").toLowerCase();

    if (letra.length !== 1 || !/^[a-z]$/i.test(letra)) {
        console.log("Entrada inválida. Digite uma única letra.");
        jogoForca(tentativasRestantes); // Rechama a função
        return;
    }

    if (palavraEscolhida.includes(letra)) {
        letrasAdivinhadas.add(letra);
        jogoForca(tentativasRestantes); // Rechama a função
    } else {
        console.log(`Letra incorreta. Tentativas restantes: ${tentativasRestantes - 1}`);
        jogoForca(tentativasRestantes - 1); // Rechama a função
    }
}

jogoForca(tentativasMaximas);*/

/*7. Validador de CPF:



const cpf = prompt("Digite o CPF (apenas números):");

function validarCPF(cpf) {
    const cpfNumeros = cpf.replace(/\D/g, '');
    return cpfNumeros.length === 11;
}

if (validarCPF(cpf)) {
    console.log("CPF válido.");
} else {
    console.log("CPF inválido.");
}*/

/*8. Simulador de Caixa Eletrônico:

const saque = Number(prompt("Digite o valor para saque:"));
const cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(Valor do saque: ${saque});

for (const valor of cedulas) {
    const quantidade = Math.floor(saque / valor);
    if (quantidade > 0) {
        console.log(${quantidade} cédula(s) de R$${valor});
        saque -= quantidade * valor;
    }
}*/

/*9. Ordenação de Array:

const entrada = prompt("Digite uma lista de números separados por vírgulas:").split(',').map(Number);
const arrayOrdenado = [];

for (let i = 0; i < entrada.length; i++) {
    const numero = entrada[i];
    let posicao = i;

    for (let j = i - 1; j >= 0 && entrada[j] > numero; j--) {
        entrada[j + 1] = entrada[j];
        posicao = j;
    }
    entrada[posicao] = numero;
}

console.log("Array ordenado:", entrada);*/
/*let matriz = [
    [1,2,3],
    [4,5,6]
]
console.log(matriz [0][1]);*/

/*let matriz2 = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
]
console.log(matriz2 [0] [1]);
console.log(matriz2 [2] [1]);
console.log(matriz2 [1] [0]);*/

/*let matriz3 = []

matriz3[0] = [1,2,3],
matriz3[1] = [4,5,6],
matriz3[2] = [7,8,9]*/

/*let matrizJogoDaVelha = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
matrizJogoDaVelha [1][2] = 1
console.log(matrizJogoDaVelha);*/

/*let matriz4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0; i<matriz4.length;i++){
    for(let j=0; j<matriz4[i].length;j++){
        matriz4 [i] [j]*=2
        console.log(matriz4[i][j]);
        
    }
}*/

// a) Criando a matriz 4x4 e preenchendo-a com números inteiros de 1 a 16
/*let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// b) Função que percorre a matriz e calcula a soma dos elementos
function somaMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// c) Exibindo o resultado da soma no console
let resultado = somaMatriz(matriz);
console.log("A soma dos elementos da matriz é:", resultado);*/



let batalhaNaval = [];
for (let i = 0; i < 10; i++) {
    batalhaNaval[i] = []; 
    for (let j = 0; j < 10; j++) {
        batalhaNaval[i][j] = 0; 
    }
}


function posicionarNavios(batalhaNaval, numNavios) {
    let naviosPosicionados = 0;
    while (naviosPosicionados < numNavios) {
        let linha = Math.floor(Math.random() * 10); 
        let coluna = Math.floor(Math.random() * 10); 
        if (batalhaNaval[linha][coluna] === 0) { 
            batalhaNaval[linha][coluna] = 1;
            naviosPosicionados++;
        }
    }
}


posicionarNavios(batalhaNaval, 5);


function atacar(batalhaNaval, linha, coluna, tentativas) {
    if (linha < 0 || linha >= 10 || coluna < 0 || coluna >= 10) {
        alert("Coordenadas inválidas! Escolha um número entre 0 e 9.");
        return tentativas;
    }
    
    if (batalhaNaval[linha][coluna] === 1) {
        alert("Acertou! Você afundou um navio.");
        batalhaNaval[linha][coluna] = 2;
        tentativas.acertos++;
    } else if (batalhaNaval[linha][coluna] === 0) {
        alert("Água! Tente novamente.");
        batalhaNaval[linha][coluna] = -1; 
        tentativas.erros++;
    } else if (batalhaNaval[linha][coluna] === 2 || batalhaNaval[linha][coluna] === -1) {
        alert("Você já atacou essa posição. Escolha outra.");
    }
    
    return tentativas;
}


function jogarBatalhaNaval() {
    let tentativas = { acertos: 0, erros: 0 };
    let totalNavios = 5;

    while (tentativas.acertos < totalNavios) {
        
        let linhaAdivinhada = prompt("Adivinhe a linha (0 a 9):");
        let colunaAdivinhada = prompt("Adivinhe a coluna (0 a 9):");

        
        let linha = linhaAdivinhada - 0; 
        let coluna = colunaAdivinhada - 0; 
        
      
        tentativas = atacar(batalhaNaval, linha, coluna, tentativas);
        
        
        alert("Navios restantes: " + (totalNavios - tentativas.acertos));
    }

    alert("Parabéns! Você afundou todos os navios.");
}


jogarBatalhaNaval();
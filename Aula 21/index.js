/*1) vai aparecer o numero 16 pois 2 é o numero de linha e 1 é o numero de coluna e um array sempre começa a contar no zero

let matriz = [
    [2,4,6],
    [8,10,12],
    [14,16,18]
]
console.log(matriz[2][1]);*/

/*2) Os numeros impressos sao: 2, 4 e 6, pois o codigo só exibe numeros pares da matriz

let matriz = [
    [1,2],
    [3,4],
    [5,6,7]
]
for (let i=0; i < matriz.length;i++){
    for (let j = 0; j<matriz[i].length;j++){
        if (matriz[i] [j] % 2 === 0){
            console.log(matriz[i] [j]);
            
        }
    }
}*/

/*3) o valor final da variavel soma é 225, a matriz contem os numeros:5,10,15,20,25,30,40,45 e o codigo usa dois loops para percorrer todos os elementos da matriz e soma cada numero à variavel soma, que começa em 0.

let matriz = [
    [5,10,15],
    [20,25,30],
    [35,40,45]
]
let soma = 0 
for(let i = 0; i <matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j]
    }
}
console.log(soma);*/

/*let mapa = [
    [0, 1, 2, 0, 1],
    [2, 0, 1, 2, 0],
    [1, 2, 0, 1, 2],
    [0, 1, 2, 0, 1],
    [2, 0, 1, 2, 0]
  ];
  
  
  let terrenos = {
    0: "grama",
    1: "água",
    2: "montanha"
  };
  
  
  for (let i = 0; i < mapa.length; i++) {
    let linha = "";
    for (let j = 0; j < mapa[i].length; j++) {
      linha += terrenos[mapa[i][j]] + " ";  
    }
    console.log(linha);  
  }*/
    

/*let pontuacoes = [
    [10, 20, 30, 40], 
    [15, 25, 35, 45], 
    [12, 22, 32, 42]  
  ];
  

  for (let i = 0; i < pontuacoes.length; i++) {  
    let soma = 0;
    for (let j = 0; j < pontuacoes[i].length; j++) {
      soma += pontuacoes[i][j];  
    }
    console.log("Jogador " + (i + 1) + " - Pontuação total: " + soma);
  }*/

    
/*let matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];


for (let i = 0; i < matriz.length; i++) {
  let inicio = 0;
  let fim = matriz[i].length - 1;
  
  while (inicio < fim) {
    
    let temp = matriz[i][inicio];
    matriz[i][inicio] = matriz[i][fim];
    matriz[i][fim] = temp;
    
    
    inicio++;
    fim--;
  }
}

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
}*/

function gerarIlha() {
  const ilha = [];
  for (let i = 0; i < 10; i++) {
      const linha = [];
      for (let j = 0; j < 10; j++) {
          
          const valor = Math.floor(Math.random() * 5);
          linha.push(valor);
      }
      ilha.push(linha);
  }
  return ilha;
}

function exibirIlha(ilha) {
  const simbolos = ["grama", "água", "floresta", "carnívoro", "herbívoro"];
  ilha.forEach(linha => {
      console.log(linha.map(celula => simbolos[celula]).join(" | "));
  });
}


const ilha = gerarIlha();
console.log("Ilha Gerada:");
exibirIlha(ilha);

function moverDinossauros(ilha, direcao) {
  const movimentos = {
      cima: [-1, 0],
      baixo: [1, 0],
      esquerda: [0, -1],
      direita: [0, 1]
  };

  const [dx, dy] = movimentos[direcao];

  for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
          if (ilha[i][j] === 3 || ilha[i][j] === 4) { 
              const novaX = i + dx;
              const novaY = j + dy;

              
              if (novaX >= 0 && novaX < 10 && novaY >= 0 && novaY < 10) {
                  
                  ilha[novaX][novaY] = ilha[i][j]; 
                  ilha[i][j] = 0; 
              }
          }
      }
  }
}

function contarDinossauros(ilha) {
  let contagem = 0;
  for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
          if (ilha[i][j] === 3 || ilha[i][j] === 4) {
              contagem++;
          }
      }
  }
  return contagem;
}


const direcao = 'baixo'; 
moverDinossauros(ilha, direcao);
console.log("Ilha Após Movimentos:");
exibirIlha(ilha);
const dinossaurosRestantes = contarDinossauros(ilha);
console.log(`Contagem de Dinossauros Restantes: ${dinossaurosRestantes}`);

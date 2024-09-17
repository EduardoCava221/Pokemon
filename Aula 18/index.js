/*const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco:[
     "Matheus Nachtergaele", "Selton Mello","Denise Fraga", "Virginia Cavendish"   
    ],
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"},
        {canal: "Canal Brasil", horario: "19h"},
        {canal: "Globo", horario: "14h"}
    ]
}
console.log(filme.elenco);
console.log(filme.elenco[filme.elenco.length - 1]);
console.log(filme.transmissoesHoje[2]);

Matheus Nachtergaele
Virginia Cavendish
{ canal: 'Globo', horario: '14h' }*/

/*const cachorro = {
    nome:"Juca",
    idade: 3,
    raça: "SRD"
}
const gato = {...cachorro,nome: "Juba"}
const tartaruga = {...gato, nome : gato.nome.replaceAll("a", "o")}

console.log(cachorro);
console.log(gato);
console.log(tartaruga);
 
a) O console imprimirá:

{ nome: 'Juca', idade: 3, raca: 'SRD' }
{ nome: 'Juba', idade: 3, raca: 'SRD' }
{ nome: 'Jubo', idade: 3, raca: 'SRD' }

b) O spread operator (...) copia as propriedades de um objeto para outro, permitindo modificações.*/

/*function minhaFunçao(objeto, propriedades){
    return objeto[propriedades]
}
const pessoa = {
    nome: "Caio",
    idade: 23,
    beckender: false
}
console.log(minhaFunçao(pessoa,"beckender"));
console.log(minhaFunçao(pessoa, "altura"));

a) O console imprimirá:

false
undefined

b) "backender" existe no objeto e seu valor é false. "altura" não existe, então retorna undefined.*/

/*const pessoa = {
    nome: "Eduardo",
    apelidos: ["Edu", "Dudu"]
  };
  
  function apresentarPessoa(obj) {
    console.log("Oi, eu sou " + obj.nome + ". Você pode me chamar de " + obj.apelidos[0] + " ou " + obj.apelidos[1] + ".");
  }
  
  apresentarPessoa(pessoa);*/

/*const pessoa = {
nome: "Eduardo",
apelidos:["Edu", "Dudu"]
  } 
  function apresentarPessoa(obj){
    console.log("Oi, eu sou"+ obj.apelidos[0]+ "ou" + obj.apelidos[1] + ".");
    
  }

  const novaPessoa = {
    ...pessoa,
    apelidos: ["Ed", "Dudu", "Eduardinho"],
  }
  apresentarPessoa(novaPessoa)*/

const pessoa1 = {
    nome: "Maria",
    idade:30,
    profissao: "Engenheira"

  }

  const pessoa2 = {
    nome: "Joao",
    idade: 25,
    profissao: "Designer"
}
function processarPessoa(obj) {
    return[
        obj.nome,
        obj.nome.length,
        obj.idade,
        obj.profissao,
        obj.profissao.length
    ]
}

console.log(processarPessoa(pessoa1));
console.log(processarPessoa(pessoa2));

/*let carrinho = []
const fruta1 = {
    nome: "Maça",
    disponibilidade:true 
}

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
}

function adicionarAoCarrinho(fruta){
    carrinho.push(fruta)
}

adicionarAoCarrinho(fruta1)
adicionarAoCarrinho(fruta2)
adicionarAoCarrinho(fruta3)

console.log(carrinho);*/

/*function obterInformacoes() {
    
    const nome = prompt("Qual é o seu nome?");
    const idade = prompt("Qual é a sua idade?");
    const profissao = prompt("Qual é a sua profissão?");
    
    
    const pessoa = {
      nome: nome,
      idade: idade,
      profissao: profissao
    };
    
    
    console.log(pessoa);
    
    
    console.log(typeof pessoa);
  }
  
  
  obterInformacoes();*/

/*function compararFilmes(filme1, filme2) {
    
    const lancadoAntes = filme1.ano < filme2.ano;
    
    
    const mesmoAno = filme1.ano === filme2.ano;
    
    
    return `O primeiro filme foi lançado antes do segundo? ${lancadoAntes} \nO primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno};`
  }
  
  
  const filme1 = {
    nome: "Harry Potter e a Pedra Filosofal",
    ano: 2001
  };
  
  const filme2 = {
    nome: "Harry Potter e a Câmara Secreta",
    ano: 2002
  };
  
  
  console.log(compararFilmes(filme1, filme2));*/

/*const tradicao1 = {
    nome: "Churrasco",
    tipo: "tradição",
    anoDeInicio: 1800,
    descricao: "Método tradicional de cozinhar carne em fogo de chão.",
    regiao: "Rio Grande do Sul",
    saudar: function() {
      console.log("Olá, eu sou a tradição do ".concat(this.nome).concat(". Vamos fazer um bom churrasco!"));
    }
  };
  
  const personagem1 = {
    nome: "Giuseppe Garibaldi",
    tipo: "personagem",
    anoDeInicio: 1830,
    descricao: "Líder militar italiano que apoiou a Revolução Farroupilha.",
    regiao: "Sul do Brasil",
    saudar: function() {
      console.log("Saudações! Eu sou ".concat(this.nome).concat(", lutador da Revolução Farroupilha."));
    }
  };
  
  const tradicao2 = {
    nome: "Cavalgada",
    tipo: "tradição",
    anoDeInicio: 1850,
    descricao: "Cavalgar para celebrar datas importantes e tradições locais.",
    regiao: "Pampas",
    saudar: function() {
      console.log("Oi! Sou a tradição da ".concat(this.nome).concat(". Vamos cavalgar pelos pampas!"));
    }
  };
 const tradicoesEPersonagens = [tradicao1, personagem1, tradicao2];
   function exibirTradicao(array) {
    array.forEach(function(item) {
      item.saudar();
    });
  }
  
  
  exibirTradicao(tradicoesEPersonagens);*/

/*const professor = {
    nome: 'Lucas', 
    idade: 32 , 
    altura: 1.75 ,
    email: 'lucas@gmail.com', 
    tarefas: ['Dar Aula', 'Responder Dúvidas', 'Ler Texto'],
  contarPiadas : function(){

    console.log("é pa ve ou pa comer");

}
}
console.log(professor.nome);
console.log(professor.idade);
console.log(professor.altura);
console.log(professor["email"]);

professor.nome='leo'
professor.email='leonardo@gmail.com'

console.log(professor.nome);
console.log(professor.email);
console.log(professor.idade);
console.log(professor.altura);
console.log(professor.tarefas[0]);*/

/*const Filme = {
    Direção: ['Alfonso Cuarón', 'David Yates', 'Mike Newell', 'Chris Columbus'],
    Nome: 'Harry Potter e a pedra filosofal',
    Lançamento: '2000',
    Elenco: [
        { ator: 'Xuxa', personagem: 'Harry Potter' },
        { ator: 'Rupert Grint', personagem: 'Ron Weasley' },
        { ator: 'Emma Watson', personagem: 'Hermione Granger' },
        { ator: 'John Cleese', personagem: 'Nick-Quase-Sem-Cabeça' },
        { ator: 'Robbie Coltrane', personagem: 'Rubeus Hagrid' },
        { ator: 'Richard Griffiths', personagem: 'Vernon Dursley' },
        { ator: 'Richard Harris', personagem: 'Albus Dumbledore' },
        { ator: 'Ian Hart', personagem: 'Quirrell' },
        { ator: 'John Hurt', personagem: 'Professor Binns' },
        { ator: 'Alan Rickman', personagem: 'Severus Snape' },
        { ator: 'Fiona Shaw', personagem: 'Petunia Dursley' },
        { ator: 'Maggie Smith', personagem: 'Minerva McGonagall' },
        { ator: 'Sean Biggerstaff', personagem: 'Oliver Wood' },
        { ator: 'Warwick Davis', personagem: 'Filch' }
    ],
    Assistiu: 'Sim',
    Personagens: [
        "Harry Potter","Ron Weasley", "Hermione Granger", "Nick-Quase-Sem-Cabeça", 
        "Rubeus Hagrid", "Vernon Dursley","Albus Dumbledore", "Quirrell",
        "Professor Binns", "Severus Snape", "Petunia Dursley", "Minerva McGonagall",
        "Oliver Wood", "Filch"
    ]
}


console.log('Direção:', Filme.Direção);
console.log('Nome:', Filme.Nome);
console.log('Lançamento:', Filme.Lançamento);
console.log('Elenco:', Filme.Elenco);
console.log('Assistiu:', Filme.Assistiu);
console.log('Personagens:', Filme.Personagens);*/

/*const pessoa = {
    Nome: 'Gabriel',
    Idade: '10',
    gêneroMusical: 'Pop'
};
function criarNovoObjeto(pessoa) {
 
    const novaPessoa = {
        ...pessoa,
        comidasPreferidas: ['Pizza', 'Hambúrguer', 'Sorvete'],
        melhorAmigo: {
            nome: 'Lucas',
            idade: 11
        }
    };


    console.log("O nome da pessoa é", novaPessoa.Nome, "ele tem", novaPessoa.Idade, "anos", "e gosta muito de", novaPessoa.gêneroMusical);
    
  
    console.log("Suas comidas preferidas são:");
    console.log("-", novaPessoa.comidasPreferidas[0]);
    console.log("-", novaPessoa.comidasPreferidas[1]);
    console.log("-", novaPessoa.comidasPreferidas[2]);

   
    console.log("Seu melhor amigo é", novaPessoa.melhorAmigo.nome, "e ele tem", novaPessoa.melhorAmigo.idade, "anos");
}


criarNovoObjeto(pessoa);*/

/*const donoDoPet = {
    nome: 'Eduardo',
    idade: 19,
    pet:{
        nome: 'Vulpix',
        raça: 'Shiba',
        idade: 5
    }
}

console.log(donoDoPet.pet.nome);*/

/*const curso = {
    nome:'front end noturno',
   linguagens: ['JS','CSS','HTML']
}
console.log(curso.linguagens[0]);

curso.numerosEstudantes=50
curso.numerosProfessores=10
console.log(curso.numerosEstudantes);
console.log(curso.numerosProfessores);*/

/*const professores = [
    {nome:'lucas', idade: 32, modulo:1 },
    {nome:'leo', idade: 29, modulo:2 },
    {nome:'Mika', idade: 29, modulo:3 }
]
console.log(professores [0]);*/

/*const usuario = {
    nome: 'prof',
    Idade: 27,
    email:'prof@senac.com.br',
    cidade: 'São Leopoldo'

}
const novoUsuario ={
    ...usuario,
    nome:'Lucas',
    idade: 18,
    cidade: 'Canoas'
}
console.log(novoUsuario);

const nomesProfs = ['Lucas', 'Leo', 'Iuri']
const novaListaProfs=[...nomesProfs]
console.log("nome do prof", novaListaProfs[0]);*/


const personagens = [
    {
        nome: "Itachi Uchiha",
        idade: 21,
        estilo: "Genjutsu, Ninjutsu",
        jutsus: ["Amaterasu", "Tsukuyomi", "Susanoo", "Izanami"]
    },
    {
        nome: "Gaara",
        idade: 18,
        estilo: "Ninjutsu",
        jutsus: ["Controle da Areia", "Escudo de Areia", "Areia Fúnebre"]
    },
    {
        nome: "Jiraiya",
        idade: 54,
        estilo: "Ninjutsu, Senjutsu",
        jutsus: ["Rasengan", "Invocação: Sapo", "Modo Sábio"]
    }
];


function adicionarPersonagem(personagem) {
    personagens.push(personagem);
    console.log(personagem.nome + " foi adicionado com sucesso!");
}


function buscarPersonagem(nome) {
    const personagemEncontrado = personagens.find(personagem => personagem.nome === nome);
    if (personagemEncontrado) {
        return personagemEncontrado;
    } else {
        return "Personagem " + nome + " nao foi encontrado.";
    }
}


function listarPersonagens() {
    personagens.forEach(personagem => {
        console.log("Nome: " + personagem.nome);
        console.log("Idade: " + personagem.idade);
        console.log("Estilo: " + personagem.estilo);
        console.log("Jutsus: " + personagem.jutsus.join(", "));
        console.log("---");
    });
}


adicionarPersonagem({
    nome: "Killer Bee",
    idade: 36,
    estilo: "Ninjutsu",
    jutsus: ["Hachibi", "Lariat", "Espadas Acrobáticas"]
});


console.log(buscarPersonagem("Gaara"));

listarPersonagens();


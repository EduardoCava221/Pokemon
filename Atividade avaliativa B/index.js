//Nome: Gladimir Eduardo Cavalheiro da Silva

// Função para criar um personagem
function criarPersonagem(nome, classe, nivel, hp, habilidades) {
    return {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        habilidades: habilidades,
        historicoAcoes: [],

        atacar: function() {
            this.historicoAcoes.push('Atacou');
            console.log(nome + ' atacou!');
        },

        defender: function() {
            this.historicoAcoes.push('Defendeu');
            console.log(nome + ' defendeu!');
        },

        usarHabilidade: function(habilidade) {
            if (habilidades.indexOf(habilidade) !== -1) {
                this.historicoAcoes.push('Usou habilidade: ' + habilidade);
                console.log(nome + ' usou a habilidade ' + habilidade + '!');
            } else {
                console.log(nome + ' não tem a habilidade ' + habilidade + '.');
            }
        },

        verificarStatus: function() {
            console.log('Nome: ' + nome);
            console.log('Classe: ' + classe);
            console.log('Nível: ' + nivel);
            console.log('HP: ' + hp);
            console.log('Habilidades: ' + habilidades.sort().toString()); // Ordena as habilidades
            console.log('Histórico de Ações: ' + this.historicoAcoes.sort().toString()); // Ordena o histórico de ações
        }
    };
}

// Array para armazenar todos os personagens
const personagens = [];

// Função para cadastrar um novo personagem
function cadastrarPersonagem(nome, classe, nivel, hp, habilidades) {
    const novoPersonagem = criarPersonagem(nome, classe, nivel, hp, habilidades);
    personagens.push(novoPersonagem);
}

// Função para buscar um personagem pelo nome
function buscarPersonagemPorNome(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            return personagens[i];
        }
    }
    return null;
}

// Função para excluir um personagem pelo nome
function excluirPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            personagens.splice(i, 1); // Remove o personagem do array
            console.log('Personagem ' + nome + ' excluído.');
            return;
        }
    }
    console.log('Personagem ' + nome + ' não encontrado.');
}

// Função para listar todos os personagens ordenados alfabeticamente
function listarTodosPersonagens() {
    const personagensOrdenados = personagens.slice().sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });
    personagensOrdenados.forEach(function(p) {
        console.log('Nome: ' + p.nome + ', Classe: ' + p.classe + ', Nível: ' + p.nivel);
    });
}

// Exemplo de uso
cadastrarPersonagem('Arthur', 'Guerreiro', 10, 100, ['Corte', 'Escudo']);
cadastrarPersonagem('Luna', 'Maga', 8, 80, ['Fogo', 'Gelo']);

const arthur = buscarPersonagemPorNome('Arthur');
if (arthur) {
    arthur.atacar();
    arthur.usarHabilidade('Corte');
    arthur.verificarStatus();
}

listarTodosPersonagens();
excluirPersonagem('Luna');
listarTodosPersonagens();

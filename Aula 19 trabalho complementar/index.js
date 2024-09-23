//Nome: Gladimir Eduardo Cavalheiro da Silva

// Função para criar um personagem
function criarPersonagem(nome, classe, nivel, hp, habilidades) {
    return {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        habilidades: habilidades,
        pontuacao: 0,
        historicoAcoes: [],

        atacar: function() {
            this.historicoAcoes.push('Atacou');
            console.log(this.nome + ' atacou!');
        },

        defender: function() {
            this.historicoAcoes.push('Defendeu');
            console.log(this.nome + ' defendeu!');
        },

        usarHabilidade: function(habilidade) {
            if (this.habilidades.indexOf(habilidade) !== -1) {
                this.historicoAcoes.push('Usou habilidade: ' + habilidade);
                console.log(this.nome + ' usou a habilidade ' + habilidade + '!');
            } else {
                console.log(this.nome + ' não tem a habilidade ' + habilidade + '.');
            }
        },

        ganharPontos: function(pontos) {
            this.pontuacao += pontos;
            console.log(this.nome + ' ganhou ' + pontos + ' pontos!');
            this.verificarNivel();
        },

        verificarNivel: function() {
            const novoNivel = Math.floor(this.pontuacao / 1000);
            if (novoNivel > this.nivel) {
                this.nivel = novoNivel;
                console.log(this.nome + ' subiu para o nível ' + this.nivel + '!');
            }
        },

        exibirPontuacao: function() {
            console.log('Pontuação de ' + this.nome + ': ' + this.pontuacao + ', Nível: ' + this.nivel);
        },

        verificarStatus: function() {
            console.log('Nome: ' + this.nome);
            console.log('Classe: ' + this.classe);
            console.log('Nível: ' + this.nivel);
            console.log('HP: ' + this.hp);
            console.log('Habilidades: ' + this.habilidades.sort().toString());
            console.log('Pontuação: ' + this.pontuacao);
            console.log('Histórico de Ações: ' + this.historicoAcoes.sort().toString());
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
    return personagens.find(personagem => personagem.nome === nome) || null;
}

// Loja de itens
const loja = [
    { nome: 'Espada Longa', tipo: 'arma', preco: 150 },
    { nome: 'Armadura de Couro', tipo: 'armadura', preco: 200 },
    { nome: 'Poção de Vida', tipo: 'poção', preco: 50 }
];

// Função para exibir itens disponíveis na loja
function exibirItensDisponiveis() {
    console.log('Itens disponíveis na loja:');
    loja.forEach(item => {
        console.log('Nome: ' + item.nome + ', Tipo: ' + item.tipo + ', Preço: ' + item.preco);
    });
}

// Função para comprar um item
function comprarItem(personagem, itemNome) {
    const item = loja.find(i => i.nome === itemNome);
    if (item) {
        console.log(personagem.nome + ' comprou ' + item.nome + '!');
        // Aqui você pode adicionar lógica para diminuir a pontuação do personagem
    } else {
        console.log('Item ' + itemNome + ' não disponível.');
    }
}

// Sistema de combate
function atacar(atacante, defensor) {
    const dano = 10; // Exemplo de dano fixo
    defensor.hp -= dano;
    console.log(atacante.nome + ' atacou ' + defensor.nome + ' causando ' + dano + ' de dano!');
    console.log(defensor.nome + ' agora tem ' + defensor.hp + ' HP.');
}

// Gestão de missões
const missoes = [
    { titulo: 'Derrote o Goblin', descricao: 'Vá até a floresta e derrote o goblin.', recompensa: 200 },
    { titulo: 'Coletar Ervas', descricao: 'Colete 10 ervas mágicas.', recompensa: 100 }
];

// Função para exibir missões disponíveis
function exibirMissoes() {
    console.log('Missões disponíveis:');
    missoes.forEach(missao => {
        console.log('Título: ' + missao.titulo + ', Descrição: ' + missao.descricao + ', Recompensa: ' + missao.recompensa);
    });
}

// Método para completar uma missão
function completarMissao(personagem, titulo) {
    const index = missoes.findIndex(m => m.titulo === titulo);
    if (index !== -1) {
        const recompensa = missoes[index].recompensa;
        personagem.ganharPontos(recompensa);
        console.log(personagem.nome + ' completou a missão: ' + titulo + ' e ganhou ' + recompensa + ' pontos!');
        missoes.splice(index, 1); // Remove a missão do array
    } else {
        console.log('Missão ' + titulo + ' não encontrada.');
    }
}

// Ranking de jogadores
const ranking = [];

// Função para adicionar um jogador ao ranking
function adicionarAoRanking(personagem) {
    ranking.push({ nome: personagem.nome, nivel: personagem.nivel, pontuacao: personagem.pontuacao });
}

// Função para exibir ranking
function exibirRanking() {
    const rankingOrdenado = ranking.sort((a, b) => b.pontuacao - a.pontuacao);
    console.log('Ranking dos jogadores:');
    rankingOrdenado.forEach((jogador, index) => {
        console.log((index + 1) + '. ' + jogador.nome + ' - Nível: ' + jogador.nivel + ', Pontuação: ' + jogador.pontuacao);
    });
}

// Função menu
function menu() {
    console.log('Menu de Opções:');
    console.log('1. Cadastrar Personagem');
    console.log('2. Exibir Itens Disponíveis');
    console.log('3. Comprar Item');
    console.log('4. Exibir Missões');
    console.log('5. Completar Missão');
    console.log('6. Atacar');
    console.log('7. Exibir Ranking');
    console.log('8. Sair');
}

// Exemplo de uso
cadastrarPersonagem('Arthur', 'Guerreiro', 1, 100, ['Corte', 'Escudo']);
cadastrarPersonagem('Luna', 'Maga', 1, 80, ['Fogo', 'Gelo']);

const arthur = buscarPersonagemPorNome('Arthur');
if (arthur) {
    arthur.ganharPontos(250); // Ganhar pontos para testar
    arthur.exibirPontuacao();
}

exibirItensDisponiveis();
comprarItem(arthur, 'Espada Longa');
exibirMissoes();
completarMissao(arthur, 'Derrote o Goblin');
adicionarAoRanking(arthur);
exibirRanking();

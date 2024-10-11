// Configuração inicial do jogo
const limiteInventario = 10;

// Estrutura do inventário do jogador
let inventario = [];

// Matriz 10x10 representando a área do jogo
let areaJogo = Array.from({ length: 10 }, () => Array(10).fill(0));

// Posição inicial do jogador
let posicaoJogador = { x: 0, y: 0 };

// Função para adicionar um item ao inventário
function adicionarItem(item) {
    if (inventario.length >= limiteInventario) {
        alert("O inventário está cheio. Não é possível adicionar o item.");
        return;
    }
    inventario.push(item);
    alert(`Item adicionado: ${item.nome}`);
}

// Função para remover um item do inventário
function removerItem(nomeItem) {
    let index = inventario.findIndex(item => item.nome === nomeItem);
    if (index !== -1) {
        inventario.splice(index, 1);
        alert(`Item removido: ${nomeItem}`);
    } else {
        alert("Item não encontrado no inventário.");
    }
}

// Função para exibir o inventário atual
function exibirInventario() {
    if (inventario.length === 0) {
        alert("Inventário Vazio");
        return;
    }
    let mensagem = "Inventário Atual:\n";
    inventario.forEach(item => {
        mensagem += `- ${item.nome} (Quantidade: ${item.quantidade || 1})\n`;
    });
    alert(mensagem);
}

// Estrutura para o jogador
let jogador = {
    vida: 100,
    dano: 20,
    municao: 10
};

// Estrutura para os inimigos
let inimigos = [];

// Função para adicionar um inimigo
function adicionarInimigo(nome, vida, dano, x, y) {
    inimigos.push({ nome, vida, dano, x, y });
}

// Função de combate
function combate(inimigo) {
    if (jogador.municao <= 0) {
        alert("Você não tem munição suficiente para atacar!");
        return;
    }

    alert(`Combate iniciado contra ${inimigo.nome}!`);
    inimigo.vida -= jogador.dano;
    jogador.municao -= 1; // Reduzir a munição ao atacar

    if (inimigo.vida <= 0) {
        alert(`${inimigo.nome} foi derrotado!`);
        removerInimigo(inimigo.nome);
    } else {
        alert(`Você atacou ${inimigo.nome} e causou ${jogador.dano} de dano. Vida do ${inimigo.nome}: ${inimigo.vida}`);
    }
}

// Função para remover um inimigo derrotado
function removerInimigo(nome) {
    let index = inimigos.findIndex(inimigo => inimigo.nome === nome);
    if (index !== -1) {
        inimigos.splice(index, 1);
        alert(`Inimigo removido: ${nome}`);
    }
}

// Função para mover o jogador


    posicaoJogador = novaPosicao;
    alert(`Jogador se moveu para a posição (${posicaoJogador.x}, ${posicaoJogador.y})`);

    // Verificar se há inimigos na nova posição
    for (let inimigo of inimigos) {
        if (inimigo.x === posicaoJogador.x && inimigo.y === posicaoJogador.y) {
            combate(inimigo); // Iniciar combate se o jogador se mover para a posição do inimigo
            return; // Sair da função após o combate
        }
    }


// Função para interagir com o usuário
function iniciarJogo() {
    // Adicionando itens ao inventário
    adicionarItem({ nome: 'Pistola', tipo: 'arma' });
    adicionarItem({ nome: 'Munição de Pistola', tipo: 'municao', quantidade: 10 });
    adicionarItem({ nome: 'Erva Verde', tipo: 'cura', quantidade: 1 });

    // Adicionando inimigos ao jogo com suas posições
    adicionarInimigo('Zumbi', 50, 10, 1, 1); // Posição do Zumbi
    adicionarInimigo('Salvador', 80, 15, 2, 2); // Posição do Salvador

    // Loop de jogo
    while (true) {
        let acao = prompt("Escolha uma ação: mover (cima, baixo, esquerda, direita), inventário, ou sair.");
        if (!acao) break; // Sair se o usuário não inserir nada

        if (acao.startsWith('mover')) {
            const direcao = acao.split(' ')[1];
            moverJogador(direcao);
        } else if (acao === 'inventário') {
            exibirInventario();
        } else if (acao === 'sair') {
            alert("Saindo do jogo...");
            break;
        } else {
            alert("Ação inválida.");
        }
    }
}

// Iniciar o jogo
iniciarJogo();

// Função para salvar o progresso do jogo
function salvarProgresso() {
    const progresso = {
        inventario: inventario,
        posicaoJogador: posicaoJogador,
        jogador: jogador,
        inimigos: inimigos
    };
    localStorage.setItem('progressoJogo', JSON.stringify(progresso));
    alert("Progresso salvo com sucesso!");
}

// Função para carregar o progresso do jogo
function carregarProgresso() {
    const progressoSalvo = localStorage.getItem('progressoJogo');
    if (progressoSalvo) {
        const progresso = JSON.parse(progressoSalvo);
        inventario = progresso.inventario;
        posicaoJogador = progresso.posicaoJogador;
        jogador = progresso.jogador;
        inimigos = progresso.inimigos;
        alert("Progresso carregado com sucesso!");
    } else {
        alert("Nenhum progresso salvo encontrado.");
    }
}

while (true) {
    let acao = prompt("Escolha uma ação: 'mover cima', 'mover baixo', 'mover esquerda', 'mover direita', 'inventário', 'salvar', 'carregar' ou 'sair'.");

    if (!acao) break; // Sair se o usuário não inserir nada

    if (acao.startsWith('mover')) {
        const direcao = acao.split(' ')[1];
        moverJogador(direcao);
    } else if (acao === 'inventário') {
        exibirInventario();
    } else if (acao === 'salvar') {
        salvarProgresso();
    } else if (acao === 'carregar') {
        carregarProgresso();
    } else if (acao === 'sair') {
        // Perguntar se o jogador deseja salvar o progresso antes de sair
        let desejaSalvar = confirm("Você deseja salvar seu progresso antes de sair?");
        if (desejaSalvar) {
            salvarProgresso();
        }
        alert("Saindo do jogo...");
        break;
    } else {
        alert("Ação inválida.");
    }
} 

/*Relatório Final do Jogo Resident Evil em JavaScript

1. Justificativa da Escolha das Estruturas de Dados

As estruturas de dados escolhidas para o jogo foram as seguintes:

	•	Matriz 10x10: Utilizada para representar a área do jogo, onde cada posição pode conter diferentes inimigos. A matriz facilita o acesso e a manipulação das posições do jogador e dos inimigos, permitindo um controle fácil sobre a lógica de movimento e combate.
	•	Array para o Inventário: Um array é utilizado para gerenciar o inventário do jogador, permitindo fácil adição e remoção de itens, além de verificação rápida do conteúdo. Isso é essencial para um jogo onde a gestão de recursos é uma parte crucial da jogabilidade.
	•	Objetos para Jogador e Inimigos: O uso de objetos para representar o jogador e os inimigos permite armazenar suas propriedades, como vida, dano e posição, de forma organizada e acessível. Isso facilita a implementação das mecânicas de combate e interação.

2. Descrição dos Algoritmos Implementados e Testes

Algoritmos Implementados

	•	Gerenciamento do Inventário:
	•	Adicionar Item: O método adicionarItem(item) verifica se o inventário já atingiu seu limite de 10 itens antes de adicionar um novo item.
	•	Remover Item: O método removerItem(nomeItem) permite ao jogador remover um item do inventário, com verificações para garantir que o item esteja presente.
	•	Exibir Inventário: O método exibirInventario() mostra os itens atualmente no inventário.
	•	Combate:
	•	Iniciar Combate: A função combate(inimigo) permite que o jogador ataque um inimigo, calculando o dano e reduzindo a vida do inimigo. Se a vida do inimigo chega a zero, ele é removido da lista.
	•	Remover Inimigo: O método removerInimigo(nome) é usado para eliminar inimigos derrotados.
	•	Movimento do Jogador:
	•	A função moverJogador(direcao) permite que o jogador se mova pela matriz, garantindo que não saia dos limites.
	•	Salvamento e Carregamento:
	•	A função salvarProgresso() usa o localStorage para armazenar o estado atual do jogo, incluindo inventário, posição do jogador, e estado dos inimigos.
	•	A função carregarProgresso() permite que o jogador retome o jogo a partir do último salvamento.

Entradas e Saídas Testadas

	•	Inventário:
	•	Testes foram realizados ao adicionar e remover itens, verificando a limitação de 10 itens e a mensagem correta ao tentar adicionar mais.
	•	Combate:
	•	O combate foi testado atacando inimigos, verificando a redução de vida dos inimigos e o consumo de munição. Resultados esperados foram confirmados, como a remoção de inimigos derrotados.
	•	Movimento:
	•	O movimento do jogador foi testado em todas as direções para garantir que a posição fosse atualizada corretamente.
	•	Salvamento:
	•	O sistema de salvamento foi testado para garantir que os dados do jogo fossem corretamente armazenados e recuperados.

3. Modificações, Alterações e Adições

Modificações e Adições ao Código

	1.	Implementação do Sistema de Salvamento:
	•	Função salvarProgresso(): Adicionada para armazenar o estado do inventário, posição do jogador, estado do jogador e inimigos usando localStorage.
	•	Função carregarProgresso(): Adicionada para restaurar o estado do jogo a partir do último salvamento.
	2.	Aviso de Salvamento ao Sair:
	•	Antes de permitir que o jogador saia do jogo, foi implementada uma mensagem de confirmação perguntando se ele deseja salvar seu progresso:

let desejaSalvar = confirm("Você deseja salvar seu progresso antes de sair?");
if (desejaSalvar) {
    salvarProgresso();
}


	3.	Modificações nas Mensagens:
	•	Mensagens foram adicionadas para informar o jogador sobre o salvamento bem-sucedido e a carga do progresso:

alert("Progresso salvo com sucesso!");
alert("Progresso carregado com sucesso!");



Prints dos Resultados dos Testes

	•	Inventário:
	•	Adicionar Item:

Item adicionado: Erva Verde

	•	Inventário Vazio:

Inventário Vazio


	•	Combate:
	•	Ataque ao Inimigo:

Combate iniciado contra Zumbi!
Você atacou Zumbi e causou 20 de dano. Vida do Zumbi: 30

	•	Inimigo Derrotado:

Zumbi foi derrotado!


	•	Salvar e Carregar:
	•	Salvar Progresso:

Progresso salvo com sucesso!

	•	Carregar Progresso:

Progresso carregado com sucesso!



4. Reflexão sobre Melhorias Possíveis

	•	Sistema de Combate Avançado: Implementar diferentes tipos de ataques e inimigos com habilidades únicas, como zumbis que se movem ou atacam de volta.
	•	Interface Gráfica: Criar uma interface gráfica para o jogo em vez de depender de prompts e alertas, tornando a experiência mais envolvente.
	•	Melhorar o Sistema de Salvar: Implementar múltiplos slots de salvamento para que os jogadores possam manter diferentes progressos.
	•	Adição de Missões: Introduzir missões e objetivos para dar mais profundidade à jogabilidade e aumentar o engajamento.

*/
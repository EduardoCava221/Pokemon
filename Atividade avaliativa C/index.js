// Arrays para armazenar os dados
const personagens = [
  { nome: "Link", vida: 0, ataque: 15, defesa: 5 },
  { nome: "Zelda", vida: 10, ataque: 10, defesa: 15 }, // Defesa inválida
  { nome: "Groose", vida: 15, ataque: 20, defesa: 15 }, // Defesa inválida
  {nome: "-4", vida: 15, ataque:30, defesa:30}
  
];

const armas = [
  { tipo: "Master Sword", dano: 15, alcance: "perto" },
  { tipo: "", dano: 10, alcance: "perto" }, // Tipo inválido
  { tipo: "arco", dano: -5, alcance:"longe" }, // Dano inválido
];

const itens = [
  { nome: "Bomba", efeito: "Causa dano" },
  { nome: "", efeito: "Cura 5 de vida" }, // Nome inválido
  { nome: "Rupee", efeito: null }, // Efeito inválido
];

// Função para validar personagens
function validarPersonagens() {
  for (let personagem of personagens) {
      // Verifica se o nome é uma string válida e não numérico
      if (typeof personagem.nome !== "string" || personagem.nome.trim() === "" || !isNaN(personagem.nome)) {
          alert(`erro: Personagem com nome inválido.`);
          continue; // Pula para o próximo personagem
      }
      if (personagem.vida < 1 || personagem.vida > 20) {
          alert(`erro: O personagem ${personagem.nome} tem corações de vida fora do intervalo permitido.`);
      }
      if (personagem.ataque < 0 || personagem.ataque > 20 || personagem.defesa < 0 || personagem.defesa > 10) {
          alert(`erro: O personagem ${personagem.nome} tem valores de ataque ou defesa inválidos.`);
      }
  }
  alert("Validação de personagens concluída!");
}

// Função para validar armas
function validarArmas() {
  for (let arma of armas) {
      if (!arma.tipo || typeof arma.tipo !== "string") {
          alert(`erro: Arma com tipo inválido.`);
      }
      if (arma.dano <= 0) {
          alert(`erro: A arma ${arma.tipo} tem dano inválido.`);
      }
  }
  alert("Validação de armas concluída!");
}

// Função para validar itens
function validarItens() {
  for (let item of itens) {
      if (!item.nome || typeof item.nome !== "string") {
          alert(`erro: Item com nome inválido.`);
      }
      if (!item.efeito) {
          alert(`erro: Item ${item.nome} com efeito inválido.`);
      }
  }
  alert("Validação de itens concluída!");
}

// Chama as funções de validação
validarPersonagens();
validarArmas();
validarItens();
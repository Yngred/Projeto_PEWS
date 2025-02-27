const userType = document.getElementById('userType');
const dynamicFields = document.getElementById('dynamicFields');
const form = document.getElementById('cadastro-form');

// Função para atualizar os campos dinâmicos
function updateFields() {
  const type = userType.value;

  // Limpa os campos antigos
  dynamicFields.innerHTML = '';

  // Campos comuns a todos os usuários
  dynamicFields.innerHTML += `
    <label for="nome" class="block text-gray-600">Nome:</label>
    <input type="text" id="nome" name="nome" class="w-full p-2 border rounded" required>

    <label for="senha" class="block text-gray-600">Senha:</label>
    <input type="password" id="senha" name="senha" class="w-full p-2 border rounded" required>
  `;
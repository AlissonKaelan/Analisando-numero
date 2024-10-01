
const numeroInput = document.getElementById('numeroInput');
const numerosSelect = document.getElementById('numeros');
const resultadoDiv = document.getElementById('resultado');
const limparButton = document.getElementById('limparButton'); // Botão para limpar
const numerosAdicionados = new Set(); // Conjunto para armazenar números únicos

function adicionarNumero() {
  const novoNumero = parseInt(numeroInput.value);

  // Verifica se o número é válido e se não está repetido
  if (!isNaN(novoNumero) && novoNumero >= 1 && novoNumero <= 100 && !numerosAdicionados.has(novoNumero)) {
    numerosAdicionados.add(novoNumero);
    const option = document.createElement('option');
    option.value = novoNumero;
    option.text = novoNumero;
    numerosSelect.appendChild(option);
    numeroInput.value = '';
    calcularEstatisticas();
  } else {
    alert('Digite um número válido entre 1 e 100 e que ainda não tenha sido adicionado.');
  }
}

function calcularEstatisticas() {
  const numeros = Array.from(numerosSelect.options).map(option => parseInt(option.value));
  const maiorNumero = Math.max(...numeros);
  const menorNumero = Math.min(...numeros);
  
  // ... outros cálculos (média, mediana, etc.)

  resultadoDiv.innerHTML = `
    <p>Números adicionados: ${numeros.length}</p>
    <p>Maior número: ${maiorNumero}</p>
    <p>Menor número: ${menorNumero}</p>
    
    `;
}

function limparNumeros() {
  numerosSelect.innerHTML = ''; // Limpa o select
  numerosAdicionados.clear(); // Limpa o conjunto
  resultadoDiv.textContent = ''; // Limpa a div de resultados
}
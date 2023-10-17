const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o hash SHA-512 de uma entrada
function calcularSHA512(input) {
  const hash = crypto.createHash('sha512');
  hash.update(input);
  return hash.digest('hex');
}

// Solicitar ao usuário que insira uma frase
rl.question('Digite uma frase: ', (frase) => {
  // Calcular o hash SHA-512 da frase
  const hashSHA512 = calcularSHA512(frase);

  // Exibir o resultado
  console.log(`Frase: ${frase}`);
  console.log(`Hash SHA-512: ${hashSHA512}`);

  // Fechar a interface de leitura
  rl.close();
});

import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


const textarea = document.querySelector('textarea');
const metrics = document.querySelectorAll('.metric-item');

function updateMetrics() {
  const text = textarea.value;

  
  metrics[0].textContent = `Caracteres: ${analyzer.getCharacterCount(text)}`;
  metrics[1].textContent = `Caracteres sin Espacios: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  metrics[2].textContent = `Palabras: ${analyzer.getWordCount(text)}`;
  metrics[3].textContent = `Numeros: ${analyzer.getNumberCount(text)}`;
  metrics[4].textContent = `Suma total de números: ${analyzer.getNumberSum(text)}`;
  metrics[5].textContent = `Promedio de Longitud: ${analyzer.getAverageWordLength(text)}`;
}

textarea.addEventListener('keyup', updateMetrics);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  textarea.value = '';
  updateMetrics();
});

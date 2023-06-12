const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.split(' ').length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const cleanedText = text.replace(/[^\w\s]/g, '');
    let count = 0;
    for (let i = 0; i < cleanedText.length; i++) {
      if (cleanedText[i] !== ' ' && cleanedText[i].trim().length !== 0 && isNaN(cleanedText[i])) {
        count++;
      }
    }
    return count;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(' ');
    const wordCount = words.length;
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);

    const averageLength = wordCount > 0 ? totalLength / wordCount : 0;
    return parseFloat(averageLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let count = 0;
    numbers.forEach((number) => {
      const parsedNumber = parseFloat(number);
      if (!isNaN(parsedNumber) && isFinite(parsedNumber)) {
        count++;
      }
    });
    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let sum = 0;
    numbers.forEach((number) => {
      const parsedNumber = parseFloat(number);
      if (!isNaN(parsedNumber) && isFinite(parsedNumber)) {
        sum += parsedNumber;
      }
    });
    return sum;
  },
};

export default analyzer;

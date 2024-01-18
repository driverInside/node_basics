const saludo = 'Hola mundo';

const sum = (a, b) => a + b;

const avg = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }

  const promedio = suma / arr.length;

  return promedio;
};

const book = {
  author: 'Andy Vickler',
  title: 'Algoritmos'
};

module.exports = {
  sum,           // sum: sum  
  average: avg,
  book,
  saludo
};

// 1. Crear una función que regrese un saludo. `

function saludar(name = 'anónimo') {
  return `Hola ${name}`;
}

const saludo = saludar();

console.log(saludo);

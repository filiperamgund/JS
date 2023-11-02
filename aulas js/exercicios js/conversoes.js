//tipo de dado
// booleanos

//conversão implícita

const numero = 456;
const numeroString = "456"// conversão explicita: const numeroString = Number("456");

console.log(numero === numeroString)
console.log(numero == numeroString)

// conversão explícita

console.log(numero + Number(numeroString))
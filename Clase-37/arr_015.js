//Ejercicio Array 015
/* Crear un documento con el nombre arr_015.js
Partiendo del siguiente array de números var numeros = [6, 2, 3, 4, 5, 1];
Eliminar el primer elemento, y guardarlo en una variable primerElemento.
Eliminar el último elemento, y guardarlo en una variable ultimoElemento.
Agregar el valor de primerElemento al final del array.
Agregar el valor de ultimoElemento al principio del array.
Mostrar el resultado final.
Resultado esperado
[1, 2, 3, 4, 5, 6]
*/

let numeros = [6, 2, 3, 4, 5, 1]
let primerElemento = numeros.shift()
let ultimoElemento = numeros.pop()

numeros.push(primerElemento)
numeros.unshift(ultimoElemento)

console.log(numeros)

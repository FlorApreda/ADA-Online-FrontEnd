//01
/*
 *  Crear un programa que pida ingresar nombres separados por espacios y
 * devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:}
 *
 * Ingrese nombres: Ada Greta Grace
 * ¡Hola Ada!
 * ¡Hola Greta!
 * ¡Hola Grace!
 */

let resp = prompt('Ingrese tres nombres separados por espacios')
const arreglo = resp.split(' ')

for (i = 0; i < arreglo.length; i++) {
	console.log(`¡Hola ${arreglo[i]}!`)
}

//02
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
 *
 * Ingrese números: 5 7 99 34 54 2 12
 * El menor número es: 2
 */

let resp = prompt('Ingrese un conjunto de numeros separados por espacios')
const arr = resp.split(' ')

let min = arr(0)

for (let i = 1; i < arr.length; i++) {
	if (arr(i) < min) {
		min = arr(i)
	}
}
console.log(min)

// 03
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:
 * Ingrese números: 5 7 10 12 24
 * La suma de todos los números es: 58
 */

const input = prompt('Ingresa los numeros a sumar')
const arr = input.split('')
let suma = 0
for (let i = 0; i < arr.length; i++) {
	suma = suma + Number(arr[i])
}
console.log(suma)

// 04
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:
 * Ingrese valores: 5 7 99 34 54 2 12
 * Ingrese valor a buscar: 54
 * El valor 54 se encuentra entre los valores originales
 */

// 05
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:
 * Ingrese valores: 5 7 12 34 54 2 12
 * Ingrese valor a buscar: 12
 * El valor 12 se encuentra en el índice 12
 *

// 06
/**
 * Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:
 * Ingresar nombres: Sam Frodo Legolas
 * Sam y Frodo están juntos, ¡Frodo está a salvo!
 * Ingresar nombres: Sam Orco Frodo
 * Sam y Frodo están separados, ¡Frodo está en peligro!
 */

let str = prompt('Ingrese los nombres de la comunidad del anillo')
let comunidad = str.split(' ')

for (i = 0; i < comunidad.length; i++) {
	if (comunidad[i] == 'sam') {
		if (comunidad[i + 1] == 'frodo' || comunidad[i - 1] == 'frodo') {
			alert('Frodo esta a salvo!')
		} else {
			alert('Frodo esta en peligro!')
		}
	}
}

// 07
/**
 * Crear un programa que pida ingresar "manzana", "pera"y "durazno" y devuelva un mensaje
 * con la cantidad que hay de cada una. Ejemplo:
 * Ingrese frutas: manzana manzana pera durazno pera durazno manzana
 * Hay 3 🍎, 2 🍐 y 2 🍑
 */

let str = prompt('Contador de ensalada de frutas')
let ensalada = str.split(' ')
let countPera = 0
let countDurazno = 0
let countManzana = 0

for (i = 0; i < ensalada.length; i++) {
	if (ensalada[i] == 'manzana') {
		countManzana++
	} else if (ensalada[i] == 'durazno') {
		countDurazno++
	} else if (ensalada[i] == 'pera') {
		countPera++
	} else {
		alert('Ingresaste una fruta podrida!')
	}
}

console.log(`Hay ${countManzana} 🍎, ${countPera} 🍐 y ${countDurazno} 🍑`)

// 08
/**
 * Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:
 * Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
 * Cuántas bananas come un mono?: 2
 * ¡Oh no!¡No hay suficientes bananas para los monos! 😭
 */

// 09
/**
 * Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:
 * Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
 * Resultado: 🐶🐶🐶🐶🐱🐱🐱
 */

// 10
/**
 * Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:
 *
 * Para una usuaria, debe mostrar: nombre usuaria + está conectada
 *
 * Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
 *
 * Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas
 *
 * Ejemplo:
 *
 * Ingrese nombres de usuarias: Ada
 * Ada está conectada
 *
 * Ingrese nombres de usuarias: Ada Grace
 * Ada y Grace están conectadas
 *
 * Ingrese nombres de usuarias: Ada Grace Marie
 * Ada, Grace y 1 persona(s) más están conectadas
 */

// 11
/**
 * Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error. El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda. Ejemplo:
 * Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
 * ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸
 */

// 12
/**
 * Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga y a la derecha del veneno. Ejemplo:
 * Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
 * Plantas sobrevivientes: 🌱🌻🌱🌷
 */

// 13
/**
 * Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:
 * Ingrese símbolos: ⭐️⭐️⭐️💫✨
 * ¡Has perdido! Inténtalo nuevamente
 *
 * Ingrese símbolos: 💫💫💫💫💫
 * ¡Felicitaciones! Has ganado
 */

// 14
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. Ejemplo:
 * Ingrese números: 5 7 99 34 54 2 12
 *
 * El array invertido es: [12, 2, 54, 34, 99, 7, 5]
 */

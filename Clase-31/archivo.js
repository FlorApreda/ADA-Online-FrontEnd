/**
 * Este código que vemos aquí puede mejorarse muchísimo utilizando dos cosas más
 * else y else if. Comencemos con el else.
 */
const nombre = prompt('Digame su nombre')

if (nombre === '') {
	alert('Por favor, digame su nombre')
} else {
	alert('Bienvenide!')
}

/**
 * Si la condición NO se cumplió, se ejecuta el bloque "else".
 *
 * Por último podemos agregar condiciones encadenadas, que se vayan
 * leyendo una por una, hasta que alguna de ellas se cumpla.
 * Esto es "else if"
 */
let nombre = prompt('Digame su nombre')

if (nombre === '') {
	// Si se cumple, entra y no se ejecuta ningún else o else if. Si no se cumple, pasa al else if
	alert('Por favor, digame su nombre')
} else if (nombre === 'Fede') {
	// Si se cumple, entra y no se ejecuta el else. Si no se cumple, se ejecuta el else.
	alert('Por favor, retírese sin hacer escándalo.')
} else {
	// Se ejecuta si ninguna condición anterior se cumplió.
	alert('Bienvenide!')
}

/**
 * Puedo encadenar todos los else if que necesite. Puede ser uno, como 10, 100, o 1000.
 * Claro que nunca tiene sentido tener ni 1000, ni 100, o incluso 10, suelen ser como mucho 3 o 4.
 * pero los límites los ponemos nosotros diseñando mejor nuestro algoritmo.
 */
/**
 * Por último vamos a hablar de ifs anidados.
 * Podemos "anidar", meter ifs dentro de otros ifs.
 * Esto nos permite generar otro tipo de algoritmo, con resultados distintos.
 * En el caso de ejemplo, vemos como SOLO muestro mensaje si las condiciones
 * de string vacío y nombre "Fede" no se cumplen.
 * Estoy ahorrandome el "else" PERO a cambio estoy perdiendo los mensajes
 * específicos para cada caso. Esto siempre va a depender de lo que nosotros
 * querramos hacer, de nuestro diseño.
 */
if (nombre !== '') {
	if (nombre !== 'Fede') {
		alert('Bienvenide!')
	}
}

if (nombre !== '') {
	if (nombre !== 'Fede') {
		alert('Bienvenide!')
	} else {
		alert('Fedes malvenidos.')
	}
} else {
	alert('Decime tu nombre')
}

/**
 * Aclaraciones sobre comparadores.
 * Tenemos dos tipos de comparadores, comparadores comunes, y comparadores estrictos.
 * Nosotros, hasta ahora, solo vimos comparadores estrictos. Es decir, comparadores
 * que comparan valor Y tipo de dato.
 */
console.log(1 === 1) // true - mismo tipo de dato, mismo valor.
console.log(1 === '1') // false - diferente tipo de dato, mismo valor.

/**
 * Los comparadores comunes, por otro lado, solo comparan el valor.
 * Es decir, el tipo de dato puede variar, pero el valor debe ser el mismo.
 */
console.log(1 == 1) // true - mismo tipo de dato, mismo valor
console.log(1 == '1') // true - diferente tipo de dato, mismo valor.
console.log(1 == 2) // false - mismo tipo de dato, diferente valor.

console.log(1 != '1') // false
console.log(1 !== '1') // true

1 == '1' // No importa si 1 es string o número, comparo el 1
// es equivalente a
1 === parseInt('1') // ParseInt("1") me devuelve 1. Un Number

// Coerción

// 1 ES igual ESTRICTO a parseInt("1")
/**
 * Estos comparadores estrictos SOLO son === y !==, comparables a == y !==
 */

/**
 * Por otro lado podemos simplemente corroborar si un valor es "truthy" (tiene un valor verdadero)
 * o falsy (tiene un valor falso).
 */
// algunos valores truthy son:
if (1) {
} // truthy
if (45) {
} // truthy
if (true) {
} // truthy
if ('un texto') {
} // truthy

// la lista de valores falsy es:
if (0) {
} // falsy
if (false) {
} // falsy
if ('') {
} // falsy
if (null) {
} // falsy
if (undefined) {
} // falsy

// podriamos refactorizar esto
const nombre = prompt('Digame su nombre')

if (nombre === '') {
	// Comparo la variable con un string vacío.
	alert('Por favor, digame su nombre')
} else {
	alert('Bienvenide!')
}
// a
const nombre = prompt('Digame su nombre')

if (nombre) {
	// Chequeo si es truthy
	alert('Bienvenide!')
} else {
	alert('Por favor digame su nombre')
}

/**
 * Negación.
 */

if (0 == false)
	if (!0)
		//
		// El valor que te voy a pasar luego de la exclamación ¿es falsy?

		// O podriamos refactorizar esto
		const nombre = prompt('Digame su nombre')

if (nombre === '') {
	// Comparo la variable con un string vacío.
	alert('Por favor, digame su nombre')
}
// a
const nombre = prompt('Digame su nombre')

if (!nombre) {
	// Comparo la variable falsy.
	alert('Por favor, digame su nombre')
}

//

const nombre = prompt('Digame su nombre')

if (!nombre) {
	alert('El valor es falsy')
} else {
	alert('El valor es truthy')
}

/**
 * Tenemos una forma de simplificar los if
 * Esta forma es el operador ternario.
 * Yo hago una pregunta y depende de su respuesta, devuelvo
 * un resultado u otro.
 */
const miVariable = true
const miText = miVariable ? 'Texto si es true' : 'Texto si es false'
// Eequivale a
let miText
if (miVariable) {
	miText = 'Texto si es true'
} else {
	miText = 'Texto si es false'
}

// Desglosando esto es:
const miText = miVariable // Aqui estoy creando una constante donde voy a guardar mi data condicional // Literalmente estoy preguntando si miVariable es truthy o falsy. Esta es la condición del if
	? 'Texto si es true' // El operador ternario "Devuelve" (como un mixin de sass, por ejemplo), este texto, si la condición fue true
	: // Con esto separo el valor que devuelvo si es true, del valor que devuelvo si es false
	  'Texto si es false' // El operador ternario devuelve este texto si la condición fue false.

const edad = prompt('Cual es tu edad?')
console.log(typeof edad) // String
const mensaje = edad >= 18 ? 'Ya podés ir preso' : 'Envidia juventud' //coerción de edad a número.
alert(mensaje)

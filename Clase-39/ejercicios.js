// 1
/***********************************************
 *
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * Split (convertir en arreglo) y join (convierte en string un array)
 *
 ***********************************************/

const miFunction = (numero) => {
	let numeroString = numero.toString()
	let arrNumero = numeroString.split('')
	let arrInvertido = arrNumero.reverse()
	let arrString = arrInvertido.join('')

	console.log(arrString)
}

miFunction(26)

/* otra forma:
 const miFunction = (param) => {
    let array = String(param).split("");
    let array2 = array.reverse();
    console.log(array);
    let resultado = Number(array2.join(""));
    console.log(resultado);
}
miFunction (23); */

//	let arrNumero = numero.split('').reverese().join()

//2
/***********************************************
 *
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 * array.reverse
 *
 ***********************************************/

const miFunction = (palabra) => {
	let array = palabra.split('')
	let array2 = array.sort()
	let resultado = array2.join('')
	console.log(resultado)
}

miFunction('siberia')

// 3
/***********************************************
 *
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de
 * cada palabra en mayúsculas.
 * Join y split
 *
 ***********************************************/

const miFunction = (frase) => {
	let array = frase.split(' ')
	let longitud = array.length
	for (let i = 0; i < longitud; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
	}
	console.log(array)
}
miFunction('El carpincho toma mate')

//4
/***********************************************
 *
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 * array.reduce
 *
 ***********************************************/

// 01
/**
 * Mostrar en consola los números del 100 al 0 utilizando la estructura while, for y do while
 */

// do while
let numero = 100

do {
	console.log(numero)
	numero--
} while (numero <= 100 && numero >= 0)

// 02
/**
 * Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while, for y do while
 */

//do while

let numero = 0

do {
	if (numero % 2 === 0) {
		console.log(numero)
	}
	numero++
} while (numero <= 1000)

// 03
/**
 * Mostrar en consola la suma parcial de todos los números
 * que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

//do while

let numero = 0
let i = 0

do {
	i = i + numero
	numero++
} while (numero <= 1000)

// 04
/**
 * Mostrar en consola la suma parcial de todos los
 * números impares que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

//do while
let numero = 0

do {
	if (numero % 2 !== 0) {
		console.log(numero)
	}
	numero++
} while (numero <= 1000)

// 05
/**
 * Mostrar en consola el siguiente dibujo utilizando la estructura while, for y do while
 /*
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************

*/

// 06
/**
 * Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000 usando for
 */

// 07
/**
 * Mostrar en consola los números desde el 1000 hasta el 0
 * Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
 
 ejemplo
**1000**
999
998
997
996
995
994
993
992
991
**990**
989
988
987
986
985
984
983
982
981
**980**
979
...
**0**
 
 */

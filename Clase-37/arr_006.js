// 01
/**
 * Crear un documento con el nombre arr_006.js
 * Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
 * Smells Like Teen Spirit
 * In Bloom
 * Come As You Are
 * Immodium
 * Lithium
 * Polly
 * Territorial Pissings
 * Drain You
 * Lounge Act
 * Pay To Play
 * On a Plain
 * Endless, Nameless
 * Reemplazar Immodium por Breed
 * Reemplazar Pay To Play por Stay Away
 * Reemplazar Tim por Something in the Way
 * Mostrar en consola la lista de canciones modificada
 * El resultado debería ser:
 
;[
	'Smells Like Teen Spirit',
	'In Bloom',
	'Come As You Are',
	'Breed',
	'Lithium',
	'Polly',
	'Territorial Pissings',
	'Drain You',
	'Lounge Act',
	'Stay Away',
	'On a Plain',
	'Something in the Way',
]**/

let discoNevermind = [
	'Smells Like Teen Spirit',
	'In Bloom',
	'Come As You Are',
	'Immodium',
	'Lithium',
	'Polly',
	'Territorial Pissings',
	'Drain You',
	'Lounge Act',
	'Pay To Play',
	'On a Plain',
	'Endless, Nameless',
]

discoNevermind[3] = 'Breed'
discoNevermind[9] = 'Stay Away'
discoNevermind[11] = 'Something in the Way'
console.log(discoNevermind)

// opcion b
let discoNevermind = [
	'Smells Like Teen Spirit',
	'In Bloom',
	'Come As You Are',
	'Immodium',
	'Lithium',
	'Polly',
	'Territorial Pissings',
	'Drain You',
	'Lounge Act',
	'Pay To Play',
	'On a Plain',
	'Endless, Nameless',
]

let lista = discoNevermind.replace([3], 'Breed')
let lista = discoNevermind.replace([9], 'Stay Away')
let lista = discoNevermind.replace([11], 'Something in the Way')
console.log(lista)

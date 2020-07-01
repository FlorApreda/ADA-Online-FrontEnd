//Ejercicio Array 010
/*Crear un documento con el nombre arr_010.js
Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” 
si el array playlistNirvana tiene más canciones, o 
“La playlist de Foo Fighters tiene más canciones” si el array playlistFoo tiene más elementos.
var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly']; */

let playlistNirvana = [
	'Smells Like Teen Spirit',
	'Come As You Are',
	'Heart-Shaped Box',
	'Lithium',
]
let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly']

if (playlistNirvana.length > playlistFoo.length) {
	console.log('La playlist de Nirvana tiene más canciones')
} else {
	console.log('La playlist de Foo Fighters tiene más canciones')
}

//Ejercicio Array 016
/* Crear un documento con el nombre arr_016.js
Teniendo las siguientes variables playlist y playlistEscuchada:
  var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
  var playlistEscuchada = ['School'];
Eliminar la primer canción del array playlist, y agregar el elemento eliminado al final del array playlistEscuchada
Mostrar el contenido de playlist
Mostrar el contenido de playlistEscuchada
Resultado espeardo:
playlist: ["Come As You Are", "Heart-Shaped Box", "Lithium"]
playlistEscuchada: ["School", "Smells Like Teen Spirit"] */

let playlist = [
	'Smells Like Teen Spirit',
	'Come As You Are',
	'Heart-Shaped Box',
	'Lithium',
]
let playlistEscuchada = ['School']

playlistEscuchada.push(playlist.shift)

console.log(playlist)
console.log(playlistEscuchada)

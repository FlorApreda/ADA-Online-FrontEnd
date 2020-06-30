//Objetos 013
/*Crear un documento con el nombre obj_013.js
Creá un objeto donde vamos a guardar información sobre una playlist de spotify
El objeto va a tener las propiedades nombre (un string), privada (un booleano) y canciones (un array de strings).
En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:
Lista de Nirvana
Privada: Si
Canciones:
Smells Like Teen Spirit
In Bloom
Come As You Are
Privada tiene que mostrar Si en el caso que la propiedad privada sea true, o No si la propiedade privada es false
*/

const playlist = {
	nombre: 'Lista de Nirvana',
	privada: true,
	canciones: ['Smells Like Teen Spirit', 'In Bloom', 'Come As You Are'],
}

if (playlist.privada === true) {
	playlist.privada = 'Si'
}

console.log(playlist.nombre)
console.log(playlist.privada)
console.log(playlist.canciones)

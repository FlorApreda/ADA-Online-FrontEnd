//Objetos 009
/*Crear un documento con el nombre obj_009.js
Tenemos la variable datos con un objeto que guarda datos de una persona
Tenemos que programar la siguiente lógica
SI la propiedad programa es true
Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"
var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true
};

// codea aca la solucion


// aca mostrar la frase
console.log("Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]");
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"
*/
const datos = {
	id: 1,
	nombre: 'Ada',
	apellido: 'Lovelace',
	email: 'ada.lovelace@gmail.com',
	telefono: '1234567890',
	edad: 29,
	programa: true,
}

if (datos.programa === true) {
	datos.lenguajesFavoritos = ['Javascript', 'Python']
}

console.log(
	`Hola, mi nombre es ${datos.nombre} y programo en ${datos.lenguajesFavoritos}`
)

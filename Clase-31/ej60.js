//Ejercicio 60
/*Crear un documento con el nombre ej60.js
Declarar la variable nota y asignar un valor de 0 a 10
Si la nota es mayor o igual a 9 entonces
Mostrar en consola el siguiente mensaje: La alumna aprobó y es muy buena.
Si la nota es menor que 9 Y mayor o igual que 6 entonces
Mostrar en consola el siguiente mensaje: La alumna aprobó.
Si No
Mostrar en consola el siguiente mensaje: La alumna no aprobó y debe hacer los ejercicios de nuevo.*/

let nota = 8
if (nota >= 9) {
	console.log('La alumna aprobó y es muy buena.')
} else if (nota < 9 && nota >= 6) {
	console.log('La alumna aprobó.')
} else {
	console.log('La alumna no aprobó y debe hacer los ejercicios de nuevo.')
}

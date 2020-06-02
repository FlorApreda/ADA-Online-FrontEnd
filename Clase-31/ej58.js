//Ejercicio 58
/*Crear un documento con el nombre ej58.js
Declarar la variable hora
Establecer un valor entre 0 y 24
Si la hora es menor que 12 y mayor que 5 entonces
Mostrar el mensaje: Buen día
Si la hora es mayor o igual que 12 y menor que 20 entonces
Mostrar el mensaje: Buenas tardes
Si No:
Mostrar el mensaje: Buenas noches
Cambiar el valor de la variable hora un par de veces y ejecutarlo para ver que pasa*/

/*var nombre = 'Marta'

if (nombre === 'Miriam') {
	console.log('El nombre de la usuaria es Miriam')
} else if (nombre === 'Felipa') {
	console.log('El nombre de la usuaria es Felipa')
} else {
	console.log('El nombre de la usuaria no es Marta ni Felipa')
}*/

let hora = 16
if (hora < 12 && hora > 5) {
	console.log('Buen día')
} else if (hora >= 12 && hora < 20) {
	console.log('Buenas tardes')
} else {
	console.log('Buenas noches')
}

//Ejercicio 62
/*Crear un documento con el nombre ej62.js
Escribir un programa donde se ingresa un número que representa el mes y se obtiene como salida un mensaje con el nombre del mes y la cantidad de días que tiene
Declarar la variable numeroDeMes y asignar un valor entre 1 y 12
Declarar la variable nombreDelMes y asignar un valor null
Declarar la variable cantidadDeDias y asignar un valor null
Según el número del mes Entonces
Asignar el nombre del mes correspondiente en la variable nombreDelMes
Asignar la cantidad de días que le corresponend al mes seleccionado
SINO
Asignar null a las variables nombreDelMes y cantidadDeDias
Si nombreDelMes Y cantidadDeDias son null Entonces
Mostrar un mensaje de error: Ingrese un número entre 1 y 12
SINO
Mostrar el siguiente mensaje: "El mes seleccionado es" + nombreDelMes + " y tiene " + cantidadDeDias + " de días"
Utilizar la siguiente lista de datos para resolver el ejercicio:
Enero 31 días
Febrero 28/29 días
Marzo 31 días
Abril 30 días
Mayo 31 días
Junio 30 días
Julio 31 días
Agosto 31 días
Septiembre 30 días
Octubre 31 días
Noviembre 30 días
Diciembre 31 días
*/

let numeroDeMes = prompt(
	'Ingrese un dia de la semana en numeros: \n(Por ejemplo: para ingresar Lunes, escriba 1)'
)
let nombreDelMes = null
let cantidadDeDias = null

if (nombreDelMes === null && cantidadDeDias === null) {
	alert('Ingrese un número entre 1 y 12')
} else {
	switch (nombreDelMes) {
		case '1':
			alert('Enero')
			break
		case '2':
			alert('Febrero')
			break
		case '3':
			alert('Marzo')
			break
		case '4':
			alert('Abril')
			break
		case '5':
			alert('Mayo')
			break
		case '6':
			alert('Junio')
			break
		case '7':
			alert('Julio')
			break
		case '8':
			alert('Agosto')
			break
		case '9':
			alert('Septiembre')
			break
		case '10':
			alert('Octubre')
			break
		case '11':
			alert('Noviembre')
			break
		case '12':
			alert('Diciembre')
			break
	}
	switch (cantidadDeDias) {
		case '1':
			alert('31')
			break
		case '2':
			alert('28/29')
			break
		case '3':
			alert('31')
			break
		case '4':
			alert('30')
			break
		case '5':
			alert('31')
			break
		case '6':
			alert('30')
			break
		case '7':
			alert('31')
			break
		case '8':
			alert('31')
			break
		case '9':
			alert('30')
			break
		case '10':
			alert('31')
			break
		case '11':
			alert('30')
			break
		case '12':
			alert('31')
			break
	}
	alert(
		`El mes seleccionado es" + ${nombreDelMes} + " y tiene " + ${cantidadDeDias} + " de días`
	)
}

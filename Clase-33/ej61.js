//Ejercicio 61
/*Crear un documento con el nombre ej61.js

Escribir un programa donde se ingresa un número entre 1 y 7 que representa un día de la semana y se obtiene un mensaje como salida. En caso de ingresar un número que no sea válido mostrar un mensaje de error

Declarar la variable dia y asignar un número del 1 al 7

Declarar la variable nombreDelDia y asignar un valor null

Versión SWITCH
Según el día seleccionado Entonces
asignar el nombre del día correspondiente al número en la variable nombreDelDia (ejemplo: si dia es 1 entonces nombreDelDia debería ser 'lunes')
SINO
Asignar el valor null en la variable nombreDelDía
Si nombreDelDía no es null Entonces
Mostrar el siguiente mensaje en consola: "El día seleccionado es" + nombreDelDía
SINO
Mostrar el siguiente mensaje en consola: "Por favor seleccionar un número de 1 a 7"
Versión IF/ELSE/IF
Escribir la misma funcionalidad pero utilizando la estructura de If's anidados. El resultado debe ser el mismo

En ambos casos ingresar distintos números como valor de la variable dia y ver el resultado
*/

//con if's anidados
let dia = prompt(
	'Ingrese un dia de la semana en numeros: \n(Por ejemplo: para ingresar Lunes, escriba 1)'
)
let nombreDelDia = null

if (dia === '1') {
	alert('Lunes')
} else if (dia === '2') {
	alert('Martes')
} else if (dia === '3') {
	alert('Miercoles')
} else if (dia === '4') {
	alert('Jueves')
} else if (dia === '5') {
	alert('Viernes')
} else if (dia === '6') {
	alert('Sabado')
} else if (dia === '7') {
	alert('Domingo')
} else {
	alert('Los datos ingresados no son válidos')
}
//con SWITCH

let dia = prompt(
	'Ingrese un dia de la semana en numeros: \n(Por ejemplo: para ingresar Lunes, escriba 1)'
)
let nombreDelDia = null

switch (dia) {
	case '1':
		alert('Lunes')
		break
	case '2':
		alert('Martes')
		break
	case '3':
		alert('Miercoles')
		break
	case '4':
		alert('Jueves')
		break
	case '5':
		alert('Viernes')
		break
	case '6':
		alert('Sabado')
		break
	case '7':
		alert('Domingo')
		break
	default:
		alert('Los datos ingresados no son válidos')
}

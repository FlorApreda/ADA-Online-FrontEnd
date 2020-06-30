//Ejercicio 65
/*Crear un documento con el nombre ej65.js
Declarar una variable saldo y asignar el valor 0
Si saldo y saldo mayor que 0 Entonces
Mostrar un mensaje en la consola: "El usuario tiene " + saldo + " pesos a favor"
SINO
Mostrar un mensaje de error en la consola: "El usuario no tiene saldo a favor"
Cambiar el valor de la variable saldo con un número mayor a 0 y volver a ejecutar el programa a ver que pasa */

let saldo = 0

if (saldo && saldo > 0) {
	alert('El usuario tiene ' + saldo + ' pesos a favor')
} else {
	alert('El usuario no tiene saldo a favor')
}

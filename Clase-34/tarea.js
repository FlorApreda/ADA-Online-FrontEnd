//01
/*Hacer un programa que pida al usuario un numero del 1 al 9. 
Luego imprimir la tabla de multiplicar de ese numero. Utilizar while. */

let numero = prompt(
	'Digame por favor un numero del 1 al 9'
)
let tablaDeMultiplicar = 0
let multiplo

while (numero <= 9 && multiplo <= 10) {
	tablaDeMultiplicar  = numero * multiplo
	console.log(tablaDeMultiplicar )
	multiplo++
}

//tira undefined


//02
/* Definir un nombre de usuario y una contraseña.　
Pedir al usuario que ingrese ambos campos por prompt, y repetir mientras el usuario NO escriba correctamente. 
Utilizar operadores lógicos && u || en la condición si es necesario. */

//03
/* Sumar al ejercicio anterior la opción de que al tercer intento, el programa se cierra. 
Utilizar operadores lógicos && u || en la condición si es necesario.
*/

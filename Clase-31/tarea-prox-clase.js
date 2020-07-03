/* Crear un programa que pregunte por el día, el mes, y el hemisferio (norte/sur) 
y devuelva la estación del año correspondiente */

let dia = prompt('Digame por favor que día es')
let mes = prompt('Digame por favor el mes')
let hemisferio = prompt('Digame por favor en qué hemisferio se encuentra')

if (
	(dia >= 21 && mes === 'marzo') ||
	mes === 'abril' ||
	mes === 'mayo' ||
	(dia < 21 && mes === 'junio')
) {
	if (hemisferio == 'norte') {
		alert('Es primavera!')
	} else {
		alert('Es otoño!')
	}
} else if (
	(dia >= 21 && mes === 'junio') ||
	mes === 'julio' ||
	mes === 'agosto' ||
	(dia < 21 && mes === 'septiembre')
) {
	if (hemisferio == 'norte') {
		alert('Es verano')
	} else {
		alert('Es invierno!')
	}
} else if (
	(dia >= 21 && mes === 'septiembre') ||
	mes === 'octubre' ||
	mes === 'noviembre' ||
	(dia < 21 && mes === 'diciembre')
) {
	if (hemisferio == 'norte') {
		alert('Es otoño')
	} else {
		alert('Es primavera')
	}
} else {
	if (hemisferio == 'norte') {
		alert('Es invierno')
	} else {
		alert('Es verano')
	}
}

/*Hacer un programa que permita cambiar la contraseña de usuario. 
Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, 
tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. 
En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. 
Definir de antemano (hardcodear) preguntas y respuestas.*/

// ejercicio en clase 32

alert(
	'De acuerdo. Vamos a cambiar su contraseña. \nPara eso debe responder las tres preguntas de seguridad correctamente.'
)
const animal = 'gato'
const miedo = 'arañas'
const superpoder = 'teletransportarse'

let nueva

let resp1 = prompt('Su animal preferido es ...')
let resp2 = prompt('Su mayor miedo es...')
let resp3 = prompt('Si tuviera un superpoder seria...')

if (resp1 && resp2 && resp3) {
	if (resp1 === 'gato' && resp2 === 'arañas' && resp3 === 'teletransportarse') {
		nueva = prompt('Ingrese nueva contraseña')
		alert('Tu contraseña fue cambiada con exito')
		alert(nueva)
	} else {
		alert('Sin respuestas correctas no hay cambios.')
	}
} else {
	alert('Sin respuestas correctas no hay cambios.')
}

// 04
/******************************************************************************
 *
 * 1. Pedir un día de la semana por prompt en texto
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 *
 ****************************************************************************/

let dia = prompt('Que dia es hoy?')
try {
	switch (dia) {
		case 'domingo':
			alert('1')
			break
		case 'lunes':
			alert('2')
			break
		case 'martes':
			alert('3')
			break
		case 'miercoles':
			alert('4')
			break
		case 'jueves':
			alert('5')
			break
		case 'viernes':
			alert('6')
			break
		case 'sabado':
			alert('7')
			break
		default:
			throw new error()
	}
} catch (err) {
	alert('kedise seniora')
}
alert('aca sigue la cosa')

// 03
/******************************************************************************
 *
 * 1. Pedir un mes del año por prompt en números
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra
 *    con IF-ELSE IF-ELSE
 *
 ****************************************************************************/

let MesDelAño = prompt(
	'Ingrese un mes del año en numeros: \n(Por ejemplo: para ingresar diciembre, escriba 12)'
)

if (MesDelAño === '1') {
	alert('Enero')
} else if (MesDelAño === '2') {
	alert('Febrero')
} else if (MesDelAño === '3') {
	alert('Marzo')
} else if (MesDelAño === '4') {
	alert('Abril')
} else if (MesDelAño === '5') {
	alert('Mayo')
} else if (MesDelAño === '6') {
	alert('Junio')
} else if (MesDelAño === '7') {
	alert('Julio')
} else if (MesDelAño === '8') {
	alert('Agosto')
} else if (MesDelAño === '9') {
	alert('Septiembre')
} else if (MesDelAño === '10') {
	alert('Octubre')
} else if (MesDelAño === '11') {
	alert('Noviembre')
} else if (MesDelAño === '12') {
	alert('Diciembre')
} else {
	alert('Los datos ingresados no son válidos')
}
//con SWITCH

let MesDelAño = prompt(
	'Ingrese un mes del año en numeros: \n(Por ejemplo: para ingresar diciembre, escriba 12)'
)

switch (mes) {
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

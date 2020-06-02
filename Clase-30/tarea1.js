//02

/*************************************************************************************
 * Pedir dos prompts, deben ser largoPelo y barba.
 * Largo pelo pueden ser dos valores, "largo" o "corto".
 * Barba puede ser true o false.
 * Hacer if-elseif-else para ofrecer corte de pelo si el pelo es largo, y afeitada si
 * barba es true.
 * alert("Corte y afeitada") o alert("Corte").
 * Poner un alert en caso de que no se haga ni corte ni afeitada.
 ****************************************************************************************/

//opcion A
let largoPelo = prompt('¿Su pelo es largo o corto?') //largo o corto -> largoPelo
let barba = prompt('¿Ud tiene barba? (responder true/false)') //si/no -> barba

if (barba === 'true' && largoPelo === 'largo') {
	alert('Corte y afeitada')
} else if (barba === 'true' && largoPelo === 'corto') {
	alert('Afeitada')
} else if (barba === 'false' && largoPelo === 'largo') {
	alert('Corte')
} else if (barba === 'false' && largoPelo === 'corto') {
	alert('Estas ATR')
}

//opcion B
let pregunta = prompt('¿Qué necesitas afeitada o corte?')

if (pregunta === 'corte' || pregunta === 'afeitada') {
	alert('Adelante, son 1000USS')
} else {
	alert('Vayase persone!')
}

//opcion C

const largoPelo = prompt('Tienes el cabello largo o corto?')
const barba = prompt('Tiene barba?')

if (largoPelo === 'largo') {
	pregun1 = prompt('Quisiera hacerse un corte?')
	if (pregun1 === 'si') {
		corte = true
	} else {
		corte = false
	}
} else if (largoPelo === 'corto') {
	corte = false
}

if (barba === 'si') {
	pregun2 = prompt('Quisiera afeitarse?')
	if (pregun2 === 'si') {
		afeitarse = true
	} else {
		afeitarse = false
	}
} else if (barba === 'no') {
	afeitarse = false
}

if (corte === true && afeitarse === true) {
	alert('Corte y afeitada')
} else if (afeitarse === true && corte === false) {
	alert('Afeitada')
} else if (afeitarse === false && corte === true) {
	alert('Corte')
} else {
	alert('No hacer ni corte ni afeitada')
}

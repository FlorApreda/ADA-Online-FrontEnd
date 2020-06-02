// 06
/******************************************************************************
Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
1/4kg: 2 sabores.
1/2kg: 3 sabores.
3/4kg: 4 sabores.
1kg: 5 sabores.
****************************************************************************/

// Opcion A
let KilosHelado = prompt('Cuantos kilos de helado va a llevar?')

if (KilosHelado === '1/4kg') {
	alert('Puede llevar dos sabores')
} else if (KilosHelado === '1/2kg') {
	alert('Puede llevar tres sabores')
} else if (KilosHelado === '3/4kg') {
	alert('Puede llevar cuatro sabores')
} else if (KilosHelado === '1kg') {
	alert('Puede llevar cuatro sabores')
}

// Opcion B

alert(
	'Hola! Para hacer su pedido de helado, elija entre las siguientes opciones \n1.- 1/4kg: 2 sabores \n2.- 1/2kg: 3 sabores \n3.- 3/4kg: 4 sabores \n4.- 1kg: 5 sabores'
)
let KilosHelado = prompt('Que opcion va a llevar?')

if (KilosHelado >= '1' && KilosHelado <= '4') {
	if (KilosHelado == '1') {
		alert('Puede llevar dos sabores')
	} else if (KilosHelado == '2') {
		alert('Puede llevar tres sabores')
	} else if (KilosHelado == '3') {
		alert('Puede llevar cuatro sabores')
	} else {
		alert('Puede llevar cuatro sabores')
	}
} else {
	alert('Por favor introduzca una opcion valida')
}

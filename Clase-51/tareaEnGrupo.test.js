/** * Una funcion que reciba o un numero o un string * correspondiente a un mes,
 * y devuelva el opuesto. * (Si recibe 12, devuelve Diciembre, si recibe Diciembre, devuelve 12).
 *  * Comenzar por los test, recordar tirar errores y testearlos. */

const getMes = (valor) => {
	if (typeof valor !== 'number' && typeof valor !== 'string')
		throw new Error(`El tipo de valor es incorrecto`)
	switch (valor) {
		case 'Enero':
			return 1
		case 'Febrero':
			return 2
		case 'Marzo':
			return 3
		case 'Abril':
			return 4
		case 'Mayo':
			return 5
		case 'Junio':
			return 6
		case 'Julio':
			return 7
		case 'Agosto':
			return 8
		case 'Septiembre':
			return 9
		case 'Octubre':
			return 10
		case 'Noviembre':
			return 11
		case 'Diciembre':
			return 12
		case 1:
			return 'Enero'
		case 2:
			return 'Febrero'
		case 3:
			return 'Marzo'
		case 4:
			return 'Abril'
		case 5:
			return 'Mayo'
		case 6:
			return 'Junio'
		case 7:
			return 'Julio'
		case 8:
			return 'Agosto'
		case 9:
			return 'Septiembre'
		case 10:
			return 'Octubre'
		case 11:
			return 'Noviembre'
		case 12:
			return 'Diciembre'
		default:
			throw 'El mes no existe'
	}
}

test('le paso "Diciembre" y devuelve 12', () => {
	expect(getMes('Diciembre')).toBe(12)
})

test('le paso 10 y devuelve Octubre', () => {
	expect(getMes(10)).toBe('Octubre')
})

test('le paso "Dociembre" tira error', () => {
	expect(() => getMes('Dociembre')).toThrow('El mes no existe')
})

test('le paso un booleano y me da error', () => {
	expect(() => getMes(true)).toThrow('El tipo de valor es incorrecto')
})

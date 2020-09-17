/*
Crear una clase Ropa, con propiedades
que me permitan definir sus 
caracteristicas basicas (nombre,
tipo, medidas, y pensar otras), y me permita 
hacer metodos para "ponerme" la ropa.
De esta forma, yo deberia poder
tener, por ejemplo, un metodo
"calzar" que no funcione si 
es una pollera, pero si 
funcione si es una zapatilla.
Crear varios tipos distintos de ropa.
*/

/// ---------------- Primera manera

class Ropa {
	constructor(nombre, tipo, medida, color) {
		this.nombre = nombre
		this.tipo = tipo
		this.medida = medida
		this.color = color
		Ropa.validarTipoDeRopa(tipo)
	}
	calzar() {
		if (this.tipo !== 'calzado')
			throw new Error('Esta prenda no se puede calzar.')
		return `Esas ${this.nombre} te quedan muy bien.`
	}
	vestirArriba() {
		if (this.tipo !== 'camisa' && this.tipo !== 'blusa')
			throw new Error('Esta prenda no se puede colocar arriba.')
		return `Esa ${this.nombre} te hace ver bien!`
	}
	vestirAbajo() {
		if (this.tipo !== 'pantalon' && this.tipo !== 'jean')
			throw new Error('Esta prenda no se puede colocar abajo.')
		return `Esa ${this.nombre} te hace ver bien!`
	}
	accesorio() {
		if (this.tipo !== 'accesorio') throw new Error('Esto no es un accesorio.')
		return `Ese ${this.nombre} te queda increíble!`
	}
	static listarTipoDeRopa() {
		return ['camisa', 'blusa', 'pantalon', 'jean', 'calzado', 'accesorio']
	}
	static validarTipoDeRopa(tipo) {
		if (Ropa.listarTipoDeRopa().indexOf(tipo) === -1)
			throw new Error('El tipo de ropa no existe.')
	}
}

/// ---------------- Segunda manera

class Ropa {
	constructor(nombre, tipo, medida, color) {
		this.nombre = nombre
		this.tipo = tipo
		this.medida = medida
		this.color = color
		Ropa.validarTipoDeRopa(tipo)
	}
	calzar() {
		if (this.tipo !== 'calzado')
			throw new Error('Esta prenda no se puede calzar.')
		return `Esas ${this.nombre} te quedan muy bien.`
	}
	vestir() {
		if (this.tipo !== 'vestimenta')
			throw new Error('Esta prenda no se puede vestir.')
		return `Esa ${this.nombre} te hace ver bien!`
	}
	accesorio() {
		if (this.tipo !== 'accesorio') throw new Error('Esto no es un accesorio.')
		return `Ese ${this.nombre} te queda increíble!`
	}
	static listarTipoDeRopa() {
		return ['calzar', 'vestir', 'accesorio']
	}
	static validarTipoDeRopa(tipo) {
		if (Ropa.listarTipoDeRopa().indexOf(tipo) === -1)
			throw new Error('El tipo de ropa no existe.')
	}
}

/*
Coloque como tipo = vestimenta.
Vestimenta corresponde a toda la ropa en general: pantalon, jean, pollera, blusa, camisa.
Todo aquella que se pueda vestir.
Coloque accesorios (él dice ropa, pero calzado no es ropa, así
que, decidí colocar accesorios) = lentes, cartera, pulseras...
*/

/// ---------------- Tercera manera

class Ropa {
	constructor(nombre, tipo, medida, color) {
		this.nombre = nombre
		this.tipo = tipo
		this.medida = medida
		this.color = color
		Ropa.validarTipoDeRopa(tipo)
	}
	calzar() {
		if (this.tipo !== 'calzado')
			throw new Error('Esta prenda no se puede calzar.')
		return `Esas ${this.nombre} te quedan muy bien.`
	}
	vestir() {
		if (
			this.tipo !== 'formal' &&
			this.tipo !== 'informal' &&
			this.tipo !== 'deportiva'
		)
			throw new Error('Esta prenda no se puede vestir.')
		return `Esa ${this.nombre} te hace ver bien!`
	}
	accesorio() {
		if (this.tipo !== 'accesorio') throw new Error('Esto no es un accesorio.')
		return `Ese ${this.nombre} te queda increíble!`
	}
	static listarTipoDeRopa() {
		return ['formal', 'informal', 'deportiva', 'calzado', 'accesorio']
	}
	static validarTipoDeRopa(tipo) {
		if (Ropa.listarTipoDeRopa().indexOf(tipo) === -1)
			throw new Error('El tipo de ropa no existe.')
	}
}

/*
Coloque como tipo: formal, informal, deportiva. 
Se pueden colocar más.
formal = blazer, camisa, pantalon...
informal = camiseta, pollera, jeans...
deportiva = campera...
*/

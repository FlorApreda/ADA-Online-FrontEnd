// 2
/**
 * Transformar los distintos tipos de ropa
 * del ejercicio anterior a nuevas clases
 * que extiendan de la clase principal.
 */

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

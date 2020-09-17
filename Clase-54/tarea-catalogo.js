/**********************************************
 * Hacer un programa que nos permita
 * cargar/modificar/borrar un catalogo de
 * productos (deberían tener "id", como identificador
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 *
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/borrar productos de
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito.
 */

class Catalogo {
	constructor(nombre) {
		this.nombre = nombre
		this.productos = []
	}

	agregar(producto) {
		this.productos.push(producto)
	}

	eliminar(id) {
		this.productos = this.productos.filter((producto) => producto.id !== id)
	}

	buscarPorId(id) {
		this.productos.findIndex((producto) => id === producto.id)
	}

	validarModificacion(index, campo) {
		if (index === -1) throw new Error('El ID seleccionado no existe.')
		if (this.camposValidos.indexOf(campo) === -1)
			throw new Error('El campo seleccionado no es valido.')
	}

	modificar(id, campo, valor) {
		const index = this.buscarPorId(id)
		this.validarModificacion(index, campo)
		this.lista[index][campo] = valor
	}
}

class Producto {
	constructor(titulo, descripcion, precio, id) {
		this.titulo = titulo
		this.descripcion = descripcion
		this.precio = precio
		this.id = id
	}
}

/* const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
    },
    buscarPorCatalogoId(catalogoId) {
        return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
    },
    agregar: function (catalogoId, cantidad) {
        const catalogoIndex = catalogo.buscarPorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(catalogoId);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogo.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.lista.push(obj);
            this.nextId++;
        } else {
            this.lista[carritoIndex].cantidad += cantidad;
        }
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};

*/

let catalogo = []

const cargar = (id, titulo, descripcion, precio) => {
	const producto = {
		id,
		titulo,
		descripcion,
		precio,
	}
	catalogo.push(producto)
}

//cargar (1, mesa, mesa de comedor, 13000);  en consola

const buscarPorId = (idABuscar) => {
	let index
	index = catalogo.findIndex((element) => {
		return element.id == idABuscar
	})
	return index
}

const modificar = (id, titulo, descripcion, precio) => {
	let index = buscarPorId(id)
	catalogo[index].titulo = titulo
	catalogo[index].descripcion = descripcion
	catalogo[index].precio = precio
}

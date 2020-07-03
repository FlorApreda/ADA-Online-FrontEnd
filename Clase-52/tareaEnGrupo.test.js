/* Hacer una serie de funciones para un TO DO list.
 * Que me permita cargar una tarea, con un titulo,
 * descripcion de tarea, y si fue hecha o no, con un
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de
 * cargar personas.*/

function ToDoList() {
	this.listaDetareas = []
	this.agregarTarea = (titulo, descripcion, estado = 'false') => {
		tarea = {
			titulo,
			descripcion,
			estado: false,
		}
		this.listaDetareas.push(tarea)
	}
	this.editarTarea = (titulo, nuevoEstado = 'true') => {
		for (i = 0; i < this.listaDetareas.length; i++) {
			if (titulo === this.listaDetareas[i].titulo) {
				this.listaDetareas[i].estado = nuevoEstado
			}
		}
	}
}

let mery
beforeEach(() => (mery = new ToDoList()))

test('Deberia agregar una tarea a la lista de tareas', () => {
	mery.agregarTarea('cama', 'cambiar las sabanas', 'false')
	expect(mery.listaDetareas[0]).toEqual({
		titulo: 'cama',
		descripcion: 'cambiar las sabanas',
		estado: false,
	})
})

test('Deberia cambiar el estado de la tarea', () => {
	mery.agregarTarea('cama', 'cambiar las sabanas', 'false')
	mery.editarTarea('cama', 'true')
	expect(mery.listaDetareas[0]).toEqual({
		titulo: 'cama',
		descripcion: 'cambiar las sabanas',
		estado: 'true',
	})
})

/////ver 2.

/*
function Tarea (titulo, descripcion) {
  this.titulo = titulo,
  this.descripcion = descripcion,
  this.estado = "Pendiente"
}

function ToDoList () {
 this.lista = [],
 this.agregar = (titulo, descripcion) => {
     let tarea = new Tarea(titulo, descripcion);
     this.lista.push(tarea);
     } 
 this.buscarIndexTarea = (tit) => {
     let index = this.lista.findIndex(tarea => tarea.titulo = tit);
     if(index === -1) throw new Error("La tarea no existe");
     return index;
 }
 this.editarEstado = (titulo) => {
      let index = this.buscarIndexTarea(titulo);
      this.lista[index].estado = "Ok";
 }

 this.eliminarTarea = (titulo) => {

 }
 this.filtarTarea = ()
}  
//test
beforeEach(() => orneLista = new ToDoList());

test("Deberia agregar una tarea correctamente a la lista", () => {
  orneLista.agregar("supermercado", "compra del mes");
  expect(orneLista.lista[0].titulo).toBe("supermercado");
});

test("Deberia dar un error si la tarea no existe", () => {
  expect(() => orneLista.buscarIndexTarea("banco")).toThrow("La tarea no existe");
});

test("Debería editar estado", () => {
  orneLista.agregar("supermercado", "compra del mes");
  orneLista.editarEstado("supermercado");
  expect(orneLista.lista[0].estado).toBe("Ok");
});


*/

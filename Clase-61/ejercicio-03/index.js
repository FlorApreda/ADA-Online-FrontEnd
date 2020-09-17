// 03
/**
 * Escribir un HTML con un div.
 * Luego, por ID, modificar el contenido del DIV
 * agregando una lista de 5 elementos.
 * Una vez agregada la lista, agregar
 * programaticamente un numero a cada elemento
 *
 * por ejemplo, si son 5 elementos deberia verse:
 * 1
 * 2
 * 3
 * 4
 * 5
 */

const addList = () => {
	const ej3Container = document.querySelector('#ej3-container')
	ej3Container.innerHTML = `
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  `
}

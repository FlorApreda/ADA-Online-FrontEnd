//Ejercicio Array 008
/*Crear un documento con el nombre arr_008.js
Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
Mostrar en consola la cantidad de etiquetas guardadas en el array */

let etiquetasHtml = [
	'h1',
	'p',
	'head',
	'title',
	'body',
	'strong',
	'form',
	'input',
	'button',
	'img',
	'a',
	'nav',
	'ul',
	'ol',
	'li',
	'div',
	'span',
	'header',
	'footer',
]

console.log(etiquetasHtml[1].toUpperCase())
console.log(etiquetasHtml[4].toLowerCase())
console.log(etiquetasHtml.length)

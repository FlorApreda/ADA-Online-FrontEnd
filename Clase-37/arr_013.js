//Ejercicio Array 013
/* Crear un documento con el nombre arr_013.js
Declarar una variable llamada concreteAndGold y asignarle un array vacio []
Agregar al array las siguientes canciones:
T-Shirt
Run
Make It Right
The Sky Is a Neighborhood
La Dee Da
Dirty Water
Arrows
Happy Ever After (Zero Hour)
Sunday Rain
The Line
Concrete and Gold
No se puede utilizar índices numéricos
Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
Los elementos tienen que guardarse en el orden inverso al que se van ingresando
Mostrar en consola la primera y última canción
Mostrar en consola el contenido del array
Resultado esperado:

"Concrete and Gold"
"T-Shirt"
["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"] 
*/

let concreteAndGold = []
let temasdeldisco = concreteAndGold.unshift(
	'T-Shirt',
	'Run',
	'Make It Right',
	'The Sky Is a Neighborhood',
	'La Dee Da',
	'Dirty Water',
	'Arrows',
	'Happy Ever After (Zero Hour)',
	'Sunday Rain',
	'The Line',
	'Concrete and Gold'
)

console.log(concreteAndGold[0])
console.log(concreteAndGold[concreteAndGold.length - 1])
console.log(concreteAndGold)

// no se guardan en el orden inverso

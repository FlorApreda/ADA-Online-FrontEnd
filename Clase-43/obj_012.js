//Objetos 012
/*Crear un documento con el nombre obj_012.js
Tenemos la variable user, que es un objeto con datos de una persona en linkedin
En el objeto tenemos dos propiedades: firstName y lastName
Por un cambio en los requerimientos del proyecto, necesitamos que el nombre sea un objeto con el siguiente formato:
var user = {
  name: {
    first: 'Grace',
    last: 'Hopper'
  },
  // y las demas propiedades
}
Tenemos que crear un nuevo objeto, y guardarlo en la variable newUser, conteniendo las mismas propiedades excepto firstName y lastName. El nombre hay que guardarlo con el formato expresado en el punto anterior.
Completa el código para conseguir el resultado esperado
var user = {
  id: 123456789,
  firstName: 'Ada',
  lastName: 'Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS', 'JS']
};

var newUser = {
  // codea aca la solucion
}

// despues de la solucion
console.log(newUser);
// resultado espeardo
// {
//   id: 123456789,
//   name: {
//     first: 'Ada',
//     last: 'Lovelace'
//   },
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'JS' ]
// }

*/

const user = {
	id: 123456789,
	firstName: 'Ada',
	lastName: 'Lovelace',
	url: 'https://www.linkedin.com/in/ada-lovelace',
	skills: ['HTML', 'CSS', 'SASS', 'JS'],
}

user.name = {
	first: 'Ada',
	last: 'Lovelace',
}

const newUser = {
	id: user.id,
	name: user.name,
	url: user.url,
	skills: user.skills,
}

console.log(newUser)

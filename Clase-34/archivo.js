/* Ejercicio en grupo clase 34 */

// 01. while
let i = 100

while (i > 0) {
	console.log(i)
	i--
}

//for

for (let i = 100; i >= 0; i--) {
	console.log(i)
}

//do while

do {
	let i = 100
	console.log(i)
	i--
} while (i >= 0)

//02. while
let i = 0

while (i < 1000) {
	console.log(i)
	i += 2
}

//for
for (let i = 0; i < 1000; i += 2) {
	console.log(i)
}

//do while

let i = 0
do {
	console.log(i)
	i += 2
} while (i <= 1000)

//03. while
let i = 0
let suma = 0

while (i < 1000) {
	suma = suma + i
	i++
	console.log(suma)
}

//for
let suma = 0
for (let i = 0; i < 1000; i++) {
	suma = suma + i
	console.log(suma)
}

//do while
let suma = 0
let i = 0
do {
	suma = suma + i
	console.log(suma)
	i++
} while (i < 1000)

//04. while

let i = 0
let suma = 0

while (i < 1000) {
	if (i % 2 != 0) {
		suma = suma + i
	}
	i++
}
console.log(suma)

//for
let suma = 0
for (let i = 0; i < 1000; i++) {
	if (i % 2 != 0) {
		suma = suma + i
		console.log(suma)
	}
}

//do while

let suma = 0
do {
	if (i % 2 != 0) {
		suma = suma + i
		console.log(suma)
	}
	i++
} while (i < 1000)

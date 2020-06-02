// 07
/******************************************************************************
Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

****************************************************************************/

//Opcion A

let MesDelAño = prompt('Ingrese un mes')

if (MesDelAño === 'Enero') {
	alert('Enero tiene 31 dias')
} else if (MesDelAño === 'Febrero') {
	alert('Febrero tiene 28 dias')
} else if (MesDelAño === 'Marzo') {
	alert('Marzo tiene 31 dias')
} else if (MesDelAño === 'Abril') {
	alert('Abril tiene 30 dias')
} else if (MesDelAño === 'Mayo') {
	alert('Mayo tiene 31 dias')
} else if (MesDelAño === 'Junio') {
	alert('Junio tiene 30 dias')
} else if (MesDelAño === 'Julio') {
	alert('Julio tiene 31 dias')
} else if (MesDelAño === 'Agosto') {
	alert('Agosto tiene 31 dias')
} else if (MesDelAño === 'Septiembre') {
	alert('Septiembre tiene 30 dias')
} else if (MesDelAño === 'Octubre') {
	alert('Octubre tiene 31 dias')
} else if (MesDelAño === 'Noviembre') {
	alert('Noviembre tiene 30 dias')
} else if (MesDelAño === 'Diciembre') {
	alert('Diciembre tiene 31 dias')
}

//Opcion B

let MesDelAño = prompt('Ingrese un mes')

if (
	MesDelAño === 'Enero' ||
	'Marzo' ||
	'Mayo' ||
	'Julio' ||
	'Agosto' ||
	'Octubre' ||
	'Diciembre'
) {
	alert('El mes tiene 31 dias')
} else if (MesDelAño === 'Abril' || 'Junio' || 'Septiembre' || 'Noviembre') {
	alert('El mes tiene 30 dias')
} else if (MesDelAño === 'Febrero') {
	alert('El mes tiene 28 dias')
} else {
	alert('Los datos ingresados no son válidos')
}

alert('Hola, tenemos 3 marcas diferentes para planchas: phillip, sony, liliana')
const getMarca = prompt('Porfavor ingresa la marca elegida')
let getModelo

if (getMarca === 'phillip') {
	alert('Los modelos de phillip son: P1, P2, P3')
	getModelo = prompt('Ingresa el modelo que necesitas:')
} else if (getMarca === 'sony') {
	alert('Los modelos de sony son: S1, S2, S3')
	getModelo = prompt('Ingresa el modelo que necesitas:')
} else if (getMarca === 'liliana') {
	alert('Los modelos de liliana son: L1, L2, L3')
	getModelo = prompt('Ingresa el modelo que necesitas:')
}

alert(`Felicitaciones,elegiste ${getMarca} y ${getModelo}`)

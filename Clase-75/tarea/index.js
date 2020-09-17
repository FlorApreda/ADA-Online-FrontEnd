/* Hacer una pagina con un header que tenga varios titulos. Empezando por
"Raza" y "Random". Estos deberian ser Navs(links) para ir a diferentes secciones de una pagina.
Hacer funcionar los links, para eso, al hacer click en link, debería:
sacarle la clase a is-active a todos los links
agregarsela al link que fue clickeado
Hacer funcionar una pagina que al cargar, debería cargar una nueva imagen de un gato.
usar el siguiente endpoint: https://api.thecatapi.com/v1/images/search/ */

const setActive = (event) => {
	const navLinks = document.querySelectorAll('.nav-link')
	const navLink = event.target
	for (let nl of navLinks) {
		nl.classList.remove('is-active')
	}
	navLink.classList.add('is-active')
}

const hideAllMainScts = () => {
	const sections = documento.querySelectorAll('.main-sct')
	for (let sct of sections) {
		sct.style.display = 'none'
	}
}

const openRazas = () => {
	hideAllMainScts
	document.querySelector('#sct-razas').style.display = 'block'
}

const openRandom = () => {
	hideAllMainScts
	axios
		.get('https://api.thecatapi.com/v1/images/search/')
		.then((res) => {
			document.querySelector('#random-img').src = res.date[0].url
			document.querySelector('#sct-random').style.display = 'flex'
		})
		.catch((err) => alert('Hubo un error'))
}

const onload = () => {
	const navLinks = document.querySelectorAll('.nav-link')
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', setActive)
	})
	const btnRazas = document.querySelector('#btn-razas')
	const btnRandom = document.querySelector('#btn-random')

	btnRazas.addEventListener('click', openRazas)
	btnRandom.addEventListener('click', openRandom)
}

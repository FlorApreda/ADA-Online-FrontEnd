import React, { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import axios from 'axios'
import './App.css'

function App() {
	const [img, setImg] = useState([])

	const cargarGatito = async () => {
		const res = await axios.get('https://api.thecatapi.com/v1/images/search')
		try {
			setImg(res.data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		cargarGatito()
	}, [])

	return (
		<div className="app">
			<section>
				<h1>Fotos random de gatitos :3 </h1>
				<button className="btn" onClick={() => cargarGatito()}>
					Random gatito!
				</button>
			</section>
			{img.map((item) => {
				return <Card url={item.url} id={item.id} />
			})}
		</div>
	)
}

export default App

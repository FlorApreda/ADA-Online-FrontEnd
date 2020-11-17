import React from 'react'
import './Card.css'

const Card = ({ url }) => {
	return (
		<section className="card">
			<div className="card--content">
				<img className="card--content-img" src={url} alt="cat" />
			</div>
		</section>
	)
}

export default Card

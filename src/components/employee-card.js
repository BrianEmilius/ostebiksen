import React from "react"
import Img from "gatsby-image"
import styles from "./employee-card.module.css"

function EmployeeCard({ name, photo, title, competences }) {
	return (
		<article className={styles.card}>
			<Img fixed={photo.fixed} alt={photo.title} className={ styles.card__image } />
			<h1 className={ styles.card__name }>{ name }</h1>
			<div className={ styles.card__extra }>
				{ title.map(title => {
					return <span className={ styles.card__title }>{ title }</span>
				}) }
				{ competences.map(competency => {
					return <span className={ styles.card__title }>{ competency }</span>
				}) }
			</div>
		</article>
	)
}

export default EmployeeCard

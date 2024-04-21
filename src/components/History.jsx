import { useState } from 'react'
import styles from './History.module.css'

export default function History() {

	return(
		<>
		<h2>Transaction history</h2>
		<div className={styles.history_container}>
			<ul className={styles.header_styling}>
				<li>Title</li>
				<li>Value</li>
				<li>Date</li>
				<li>Category</li>
				<li>Delete</li>
			</ul>
			<ul className={styles.list_styling}>
				<li>Dinner</li>
				<li>$11</li>
				<li>03.04.2024</li>
				<li>Groceries</li>
				<button>x</button>
			</ul>
			<ul className={styles.list_styling}>
				<li>Camera</li>
				<li>$300</li>
				<li>03.04.2024</li>
				<li>Shopping</li>
				<button>x</button>
			</ul>
		</div>
		</>
	)

}
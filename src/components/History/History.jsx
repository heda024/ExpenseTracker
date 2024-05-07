import { useState } from 'react'
import styles from './History.module.css'

export default function History({transactions, onDeleteTransaction}) {

	return(
		<>
		<h2>Transaction history</h2>
		<div className={styles.history_container}>
			{/* <ul className={styles.header_styling}>
				<li>Title</li>
				<li>Value</li>
				<li>Date</li>
				<li>Category</li>
				<li></li>
			</ul> */}
			<ul className={styles.list_styling}>
				{
					transactions.map((data)=> 
					<li key={data.id}> 
					<strong> Title:</strong> {data.name} 
					<strong> Value: </strong> {data.value}NOK
					<strong> Date: </strong>{data.date}  
					<strong> Category: </strong>{data.category} 
					<button onClick={() => onDeleteTransaction(data.id)}> Delete</button></li>)
				}
				
			</ul>
			
		</div>
		</>
	)

}
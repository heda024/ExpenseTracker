import { useState } from 'react'
import styles from './AddTransaction.module.css'

export default function AddTransaction() {

	

	return(
		<>
		<h2>Add a new transaction</h2>
		<div className={styles.form_container}>
			<form className={styles.form}>
				<label htmlFor="title">Title</label>
				<input type="text" name='title' className={styles.input}/>

				<label htmlFor="value">Value</label>
				<input type="number" name='value' className={styles.input}/>

				<label htmlFor="date">Date</label>
				<input type="date" name='date' className={styles.input}/>

				<label htmlFor="title">Title</label>
				<select name="category" className={styles.input}>
					<option value="blank">-</option>
					<option value="entertainment">Entertainment</option>
					<option value="groceries">Groceries</option>
					<option value="shopping">Shopping</option>
					<option value="health">Health</option>	
					<option value="transportation">Transportation</option>	
					<option value="other">Other</option>				
				</select>
				<div className={styles.button}>
					<button className={styles.expenseBtn}>Add expense</button>
				</div>
			</form>
		</div>
		</>
	)

}
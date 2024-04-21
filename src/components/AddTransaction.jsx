import { useState } from 'react'
import styles from './AddTransaction.module.css'

export default function AddTransaction() {

	return(
		<>
		<h2>Add a new transaction</h2>
		<divc className={styles.form_container}>
			<form className={styles.form}>
				<label htmlFor="title">Title</label>
				<input type="text" name='title' />

				<label htmlFor="value">Value</label>
				<input type="number" name='value' />

				<label htmlFor="date">Date</label>
				<input type="date" name='date' />

				<label htmlFor="title">Title</label>
				<select name="category" >
					<option value="entertainment">Entertainment</option>
					<option value="groceries">Groceries</option>
					<option value="shopping">Shopping</option>
					<option value="health">Health</option>
					<option value="salary">Salary</option>
					<option value="other income">Other income</option>
				</select>
				<div className={styles.button}>
					<button className={styles.incomeBtn}>Add income</button>
					<button className={styles.expenseBtn}>Add expense</button>
				</div>
			</form>
		</divc>
		</>
	)

}
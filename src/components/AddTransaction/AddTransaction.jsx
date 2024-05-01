import { useState } from 'react'
import styles from './AddTransaction.module.css'
import uniqueId from '../../utils';

export default function AddTransaction({onAddNewTransaction}) {

	const [nameValue, setNameValue] = useState('');
	const [value, setValue] = useState('');
	const [dateValue, setDateValue] = useState('');
	const [category, setCategory] = useState('')

	const addTransaction = (e) => {
		e.preventDefault();
		
		const  data = {id: uniqueId(), 
			name: nameValue, 
			value: parseInt(value), 
			date: dateValue, 
			category: category};

			onAddNewTransaction(data);
	}


	return(
		<>
		<h2>Add a new transaction</h2>
		<div className={styles.form_container}>
			<form className={styles.form}>
				<label htmlFor="title">Title</label>
				<input type="text" name='title' value={nameValue} 
				onChange={(e) => setNameValue(e.target.value)} className={styles.input}/>

				<label htmlFor="value">Value</label>
				<input type="number" name='value' value={value} 
				onChange={(e) => setValue(e.target.value)} className={styles.input}/>

				<label htmlFor="date">Date</label>
				<input type="date" name='date' value={dateValue} 
				onChange={(e) => setDateValue(e.target.value)} className={styles.input}/>

				<label htmlFor="category">Category</label>
				<select name="category" value={category} 
				onChange={(e) => setCategory(e.target.value)} className={styles.input}>
					<option value="blank">-</option>
					<option value="entertainment">Entertainment</option>
					<option value="groceries">Groceries</option>
					<option value="shopping">Shopping</option>
					<option value="health">Health</option>	
					<option value="transportation">Transportation</option>	
					<option value="other">Other</option>				
				</select>
				<div className={styles.button}>
					<button onClick={(e) => addTransaction(e)} className={styles.expenseBtn}>Add expense</button>
				</div>
			</form>
		</div>
		</>
	)

}
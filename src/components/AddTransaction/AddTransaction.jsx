import { useState } from 'react'
import styles from './AddTransaction.module.css'
import uniqueId from '../../utils';

export default function AddTransaction({onAddNewTransaction}) {

	const [nameValue, setNameValue] = useState('');
	const [value, setValue] = useState('');
	const [dateValue, setDateValue] = useState('');
	const [category, setCategory] = useState('')

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const isValid = validateForm();
		if (isValid) {
			console.log("Form is valid.");
			addTransaction();
		} else {
			console.log("Form is invalid, please correct the errors.");
		}
	};
	
	const addTransaction = () => {
		const data = {
			id: uniqueId(),
			name: nameValue,
			value: parseInt(value),
			date: dateValue,
			category: category
		};
	
		onAddNewTransaction(data);
	
		setNameValue('');
		setValue('');
		setDateValue('');
		setCategory('');
	};

	// Form validation

	const [userData, setUserData] = useState({
		title: "",
		value: "",
		date: "",
		category: "",
	  });
	  const [errors, setErrors] = useState({
		titleError: "",
		valueError: "",
		dateError: "",
		submissionError:"",
	  });
	
	  const validateForm = () => {
		let isValid = true;
		const clonedErrorObj = { ...errors };
	
		if (!userData.title.trim()) {
			clonedErrorObj.titleError = "Title is required!";
			isValid = false;
		} else if (userData.title.trim().length > 15) {
			clonedErrorObj.titleError = "Maximum character limit exceeded";
			isValid = false;
		} else {
			clonedErrorObj.titleError = ""; // Clear error if valid
		}
	
		if (!userData.value) {
			clonedErrorObj.valueError = "Value is required!";
			isValid = false;
		} else {
			clonedErrorObj.valueError = ""; 
		}
	
		if (!userData.date) {
			clonedErrorObj.dateError = "You must select a date!";
			isValid = false;
		} else {
			clonedErrorObj.dateError = ""; 
		}

		if (!isValid) {
			clonedErrorObj.submissionError = "Your input is not valid";
		}

		setErrors(clonedErrorObj);
		return isValid;
	};

	
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setErrors((prevErrors) => ({
			...prevErrors,
			[`${name}Error`]: "",
		}));
		setUserData((prev) => ({
			...prev,
			[name]: value,
		}));
	};



	return(
		<>
		<h2>Add a new transaction</h2>
		<div className={styles.form_container}>
			<form className={styles.form} onSubmit={handleFormSubmit}>
				<label htmlFor="title">Title</label>
				<input type="text" name='title' value={nameValue} 
				onChange={(e) => {
					handleChange(e); 
					setNameValue(e.target.value);
				}}    
				className={styles.input}/>
				<p>{errors.titleError}</p>
				

				<label htmlFor="value">Value (NOK)</label>
				<input type="number" name='value' value={value} 
				onChange={(e) => {
					handleChange(e); 
					setValue(e.target.value);
				}}    
				className={styles.input}/>
				<p>{errors.valueError}</p>

				<label htmlFor="date">Date</label>
				<input type="date" name='date' value={dateValue} 
				onChange={(e) => {
					handleChange(e); 
					setDateValue(e.target.value);
				}}    
				className={styles.input}/>
				<p>{errors.dateError}</p>

				<label htmlFor="category">Category</label>
				<select name="category" value={category} 
				onChange={(e) => {
					setCategory(e.target.value)
				}} 
				className={styles.input}>
					<option value="-">-</option>
					<option value="entertainment">Entertainment</option>
					<option value="groceries">Groceries</option>
					<option value="shopping">Shopping</option>
					<option value="health">Health</option>	
					<option value="transportation">Transportation</option>	
					<option value="other">Other</option>				
				</select>
				

				<div className={styles.button}>
					<button type='submit'className={styles.expenseBtn}>Add expense</button>
				</div>
				<p>{errors.submissionError}</p>
			</form>
		</div>
		</>
	)

}
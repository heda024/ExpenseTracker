import Balance from '../Balance/Balance'
import History from '../History/History'
import AddTransaction from '../AddTransaction/AddTransaction'
import styles from './ExpenseTracker.module.css'
import uniqueId from '../../utils'
import { useState, useEffect } from 'react'

// Component container

const transactionData = [
	
]


export default function ExpenseTracker() {

	const [expense, setExpense] = useState(0);
	const [transactions, setTransactions] = useState(transactionData)

	// Save to local storage
	const saveState = () => {
		localStorage.setItem('expenseTrackerState', 
		JSON.stringify(transactions));
	}
	
	// Calculate total expenses
	const calculateExpenses = () => {
		let expense = 0;

		transactions.forEach((data) => {
				expense -= data.value;
		})

		saveState()
		setExpense(expense)
	}

	// Add new transactions
	const handleAddNewTransaction = item => {
		let newTransactions = [...transactions, item];
		setTransactions(newTransactions);
		
	}

	// update total expenses and retrieve from local storage
	useEffect(() => {
		let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
		if(localState){
			setTransactions(localState);
		} else{
			calculateExpenses()
		}
	
	}, [])

	useEffect(() => {
		calculateExpenses()
	}, [transactions])

	// Delete transaction
	const handleDeleteTransaction = id => {
		console.log(id);
		const newTransactions = transactions.filter((item) => item.id != id);
		setTransactions(newTransactions)
	}
	
	

return(

	<>
	<div className={styles.tracker_container}>
		<h1>Expense tracker</h1>
		<div className={styles.container_layout}>
			<Balance expense={expense}/>
		</div>
		<div className={styles.transaction_container}>
			<div className={styles.container_layout}>
				<AddTransaction onAddNewTransaction={handleAddNewTransaction}/>
			</div>
			<div className={styles.container_layout}>
				<History transactions={transactions}
				onDeleteTransaction={handleDeleteTransaction}/>
			</div>
		</div>
	</div>
	</>
)

}
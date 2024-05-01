import Balance from '../Balance/Balance'
import History from '../History/History'
import AddTransaction from '../AddTransaction/AddTransaction'
import styles from './ExpenseTracker.module.css'
import uniqueId from '../../utils'
import { useState, useEffect } from 'react'

// Component container

const transactionData = [
	{id: uniqueId(), 
		name:'Groceries', 
		value: '200', 
		date: '20.02.2024', 
		category: 'groceries'},
	{id: uniqueId(), 
		name:'Books', 
		value: '20', 
		date: '20.02.2024', 
		category: 'shopping'}
]


export default function ExpenseTracker() {

	const [expense, setExpense] = useState(0);
	const [transactions, setTransactions] = useState(transactionData)
	
	const calculateExpenses = () => {
		let expense = 0;

		transactions.forEach((data) => {
				expense -= data.value;
		})
		setExpense(expense)
	}

	const handleAddNewTransaction = item => {
		let newTransaction = [...transactions, item];
		setTransactions(newTransaction);
		
	}

	useEffect(() => {
		calculateExpenses()
	
	}, [])

	useEffect(() => {
		calculateExpenses()
	
	}, [transactions])
	
	

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
				<History transactions={transactions}/>
			</div>
		</div>
	</div>
	</>
)

}
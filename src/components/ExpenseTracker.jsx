import Balance from './Balance'
import History from './History'
import AddTransaction from './AddTransaction'
import styles from './ExpenseTracker.module.css'

export default function ExpenseTracker() {

return(

	<>
	<div className={styles.tracker_container}>
		<h1>Expense tracker</h1>
		<div className={styles.container_layout}>
			<Balance/>
		</div>
		<div className={styles.container_layout}>
			<AddTransaction/>
		</div>
		<div className={styles.container_layout}>
			<History/>
		</div>
	</div>
	</>
)

}
import { useState } from 'react'
import styles from './Balance.module.css'

export default function Balance(){

	return(
		<>
		<div  className={styles.balanceContainer}>
			<h2>Your balance</h2>
			<div className={styles.balanceFont}>$0</div>
		</div>
		</>
	)

}
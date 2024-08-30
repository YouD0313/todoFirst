import React, { useState } from 'react';
import styles from './Search.module.css';

export default function Search({
	handleAddSubmit,
	handleChange,
	handleAddClick,
	stateArrAdd,
}) {
	return (
		<form className={styles.wrapFooter} action='' onSubmit={handleAddSubmit}>
			<input
				className={styles.search}
				type='text'
				name='todo'
				id='todo'
				placeholder='Add Todo'
				onChange={handleChange}
			/>
			<button className={styles.add} onClick={(handleAddClick, stateArrAdd)}>
				Add
			</button>
		</form>
	);
}

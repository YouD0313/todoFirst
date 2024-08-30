import React, { useState } from 'react';
import styles from './Search.module.css';

export default function Search({ handleAddSubmit, handleTextChange, todo }) {
	return (
		<form className={styles.wrapSearch} action='' onSubmit={handleAddSubmit}>
			<input
				className={styles.search}
				type='text'
				name='todo'
				id='todo'
				value={todo}
				placeholder='Add Todo'
				onChange={handleTextChange}
			/>
			<button className={styles.add}>Add</button>
		</form>
	);
}

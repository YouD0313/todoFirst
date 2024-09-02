import styles from './Search.module.css';

export default function Search({ handleAddSubmit, handleTextChange, content }) {
	return (
		<form className={styles.wrapSearch} action='' onSubmit={handleAddSubmit}>
			<input
				className={styles.search}
				type='text'
				name='todo'
				id='todo'
				value={content}
				placeholder='Add Todo'
				onChange={handleTextChange}
			/>
			<button className={styles.add}>Add</button>
		</form>
	);
}

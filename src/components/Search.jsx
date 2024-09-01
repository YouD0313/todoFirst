import styles from './Search.module.css';

export default function Search() {
	return (
		<form className={styles.wrapSearch} action=''>
			<input
				className={styles.search}
				type='text'
				name='todo'
				id='todo'
				placeholder='Add Todo'
			/>
			<button className={styles.add}>Add</button>
		</form>
	);
}

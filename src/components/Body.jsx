import styles from './Body.module.css';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Body({
	content,
	handleDeleteListClick,
	checked,
	handleCheckedChange,
	mode,
}) {
	return (
		<div className={styles.lists}>
			<div className={styles.list}>
				<div className={styles.checkBox}>
					<input
						type='checkbox'
						name={content}
						id={content}
						onChange={handleCheckedChange}
						checked={checked && true}
					/>
				</div>
				<div className={styles.textDiv}>
					<span
						className={`${styles.text} ${checked ? styles.end : ''} 
						${mode && styles.text_dark}`}
					>
						{content}
					</span>
				</div>
			</div>
			<div onClick={handleDeleteListClick} id={content}>
				<div
					id={content}
					className={`${styles.iconDiv} ${mode && styles.iconDiv_dark}`}
				>
					<BsFillTrash3Fill
						id={content}
						className={`${styles.trashIcon} ${mode && styles.trashIcon_dark}`}
					/>
				</div>
			</div>
		</div>
	);
}

import styles from './Body.module.css';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Body() {
	return (
		<div className={styles.lists}>
			<div className={styles.list}>
				<div className={styles.checkBox}>
					<input type='checkbox' />
				</div>
				<div className={styles.textDiv}>
					<span className={`${styles.text}`}>공부하기</span>
				</div>
			</div>
			<div>
				<div className={`${styles.iconDiv}`}>
					<BsFillTrash3Fill className={`${styles.trashIcon}`} />
				</div>
			</div>
		</div>
	);
}

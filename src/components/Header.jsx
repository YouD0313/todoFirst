import styles from './Header.module.css';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

export default function Header({ mode, handleModeClick }) {
	return (
		<div className={styles.headers}>
			<div className={styles.mode}>
				{mode ? (
					<FaMoon onClick={handleModeClick} style={{ fontSize: '1.5rem' }} />
				) : (
					<MdWbSunny
						onClick={handleModeClick}
						style={{ color: 'white', fontSize: '1.5rem' }}
					/>
				)}
			</div>
			<div className={styles.header}>
				<span>All</span>
				<span>Active</span>
				<span>Completed</span>
			</div>
		</div>
	);
}

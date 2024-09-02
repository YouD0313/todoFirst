import styles from './Header.module.css';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

export default function Header({
	mode,
	handleModeClick,
	handleFilterClick,
	filter,
}) {
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
				<span
					className={filter == 0 && styles.borderBottom}
					id='0'
					onClick={handleFilterClick}
				>
					All
				</span>
				<span
					className={filter == 1 && styles.borderBottom}
					id='1'
					onClick={handleFilterClick}
				>
					Active
				</span>
				<span
					className={filter == 2 && styles.borderBottom}
					id='2'
					onClick={handleFilterClick}
				>
					Completed
				</span>
			</div>
		</div>
	);
}

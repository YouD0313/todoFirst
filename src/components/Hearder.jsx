import React, { useState } from 'react';
import styles from './Header.module.css';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

export default function Hearder() {
	const [mode, setMode] = useState(false);
	const handelModeClick = () => {
		setMode((prev) => !prev);
	};
	return (
		<div className={styles.headers}>
			<div className={styles.mode}>
				{mode ? (
					<FaMoon
						onClick={handelModeClick}
						style={{ color: 'white', fontSize: '1.5rem' }}
					/>
				) : (
					<MdWbSunny
						onClick={handelModeClick}
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

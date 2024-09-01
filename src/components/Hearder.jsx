import React, { useState } from 'react';
import styles from './Header.module.css';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

export default function Hearder({ mode, handelModeClick, handleFilterClick }) {
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
				<span id='0' onClick={handleFilterClick}>
					All
				</span>
				<span id='1' onClick={handleFilterClick}>
					Active
				</span>
				<span id='2' onClick={handleFilterClick}>
					Completed
				</span>
			</div>
		</div>
	);
}

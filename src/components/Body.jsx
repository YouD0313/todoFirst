import React, { useState } from 'react';
import styles from './Body.module.css';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Body({
	content,
	handleDeleteListClick,
	checked,
	handleCheckedChange,
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
					/>
				</div>
				<div className={styles.text}>
					<span className={checked ? styles.end : ''}>{content}</span>
				</div>
			</div>
			<div className={styles.icon} onClick={handleDeleteListClick} id={content}>
				<div id={content}>
					<BsFillTrash3Fill
						id={content}
						style={{
							color: 'white',
							fontSize: '.9rem',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

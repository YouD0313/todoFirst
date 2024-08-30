import React from 'react';
import styles from './Body.module.css';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Body({
	list,
	handledeleteListClick,
	handleCheckedChange,
	checked,
}) {
	return (
		<div className={styles.lists}>
			<div className={styles.list}>
				<div className={styles.checkBox}>
					<input type='checkbox' name='' id='' onChange={handleCheckedChange} />
				</div>
				<div className={styles.text}>
					<span className={checked && styles.end}>{list}</span>
				</div>
			</div>
			<div className={styles.icon} onClick={handledeleteListClick} id={list}>
				<div id={list}>
					<BsFillTrash3Fill
						id={list}
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

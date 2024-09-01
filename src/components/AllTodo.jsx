import React, { useState } from 'react';
import styles from './AllTodo.module.css';
import Header from './Header';
import Body from './Body';
import Search from './Search';
// import { MdLogin } from 'react-icons/md';

export default function AllTodo() {
	const [mode, setMode] = useState(false);
	const handleModeClick = () => {
		setMode((prev) => !prev);
	};
	return (
		<div className={`${styles.whole}`}>
			<div className={styles.wrapTodo}>
				<div className={`${styles.header}`}>
					<Header mode={mode} handleModeClick={handleModeClick} />
				</div>
				<div className={`${styles.body}`}>
					<Body />
				</div>
				<div className={`${styles.footer}`}>
					<Search />
				</div>
			</div>
		</div>
	);
}

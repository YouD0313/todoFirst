import React, { useState } from 'react';
import styles from './AllTodo.module.css';
import Hearder from './Hearder';
import Body from './Body';
import Search from './Search';

export default function AllTodo() {
	const [todo, setTodo] = useState('');
	const [todoLists, setTodoLists] = useState([]);
	const [checked, setChecked] = useState(false);

	const handleAddSubmit = (e) => {
		e.preventDefault();
		if (!todo || todoLists.includes(todo)) {
			setTodo('');
			return;
		}
		setTodoLists([...todoLists, todo]);
		setTodo('');
	};
	const handleTextChange = (e) => {
		let keyup = e.target.value;
		setTodo(keyup);
	};
	const handledeleteListClick = (e) => {
		const tId = e.target.id || e.target.nearestViewportElement.id;
		setTodoLists((prev) => prev.filter((l) => !l.includes(tId)));
	};
	const handleCheckedChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<div className={styles.whole}>
			<div className={styles.wrapTodo}>
				<div className={styles.header}>
					<Hearder />
				</div>
				<div className={styles.body}>
					{!!todoLists &&
						todoLists.map((list) => (
							<Body
								key={list}
								list={list}
								handledeleteListClick={handledeleteListClick}
								handleCheckedChange={handleCheckedChange}
								checked={checked}
							/>
						))}
				</div>
				<div className={styles.footer}>
					<Search
						todo={todo}
						handleAddSubmit={handleAddSubmit}
						handleTextChange={handleTextChange}
					/>
				</div>
			</div>
		</div>
	);
}

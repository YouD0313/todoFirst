import React, { useState } from 'react';
import styles from './AllTodo.module.css';
import Hearder from './Hearder';
import Body from './Body';
import Search from './Search';

export default function AllTodo() {
	const [todo, setTodo] = useState({ list: '', key: '' });
	const [todoLists, setTodoLists] = useState([]);
	const [checked, setChecked] = useState(false);

	const handleAddSubmit = (e) => {
		e.preventDefault();
		if (!todo) {
			setTodo({ list: '', key: '' });
			return;
		}
		setTodoLists([...todoLists, todo]);
		setTodo({ list: '', key: '' });
	};

	const handleTextChange = (e) => {
		let list = e.target.value;
		let key = Math.random();
		setTodo({ list, key });
	};
	const handledeleteListClick = (e) => {
		const tId = e.target.id || e.target.nearestViewportElement.id;
		setTodoLists((prev) => prev.filter((l) => !l.list.includes(tId)));
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
								key={list.key}
								list={list.list}
								handledeleteListClick={handledeleteListClick}
								handleCheckedChange={handleCheckedChange}
								checked={checked}
							/>
						))}
				</div>
				<div className={styles.footer}>
					<Search
						todo={todo.list}
						handleAddSubmit={handleAddSubmit}
						handleTextChange={handleTextChange}
					/>
				</div>
			</div>
		</div>
	);
}

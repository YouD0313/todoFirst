import React, { useState } from 'react';
import styles from './AllTodo.module.css';
import Hearder from './Hearder';
import Body from './Body';
import Search from './Search';
import { MdLogin } from 'react-icons/md';

export default function AllTodo() {
	const [todo, setTodo] = useState({ content: '', check: false, id: '' });
	const [list, setList] = useState([]);
	const [active, setActive] = useState('');
	const [completed, setCompleted] = useState('');
	const [checked, setChecked] = useState(false);

	const [mode, setMode] = useState(false);

	const handleCheckedChange = (e) => {
		const idVal = e.target.id;
		setList((prev) => {
			return prev.map((list) => {
				if (list.content.includes(idVal)) {
					return { ...list, check: true };
				}
			});
		});
	};

	const handelModeClick = () => {
		setMode((prev) => !prev);
	};
	const handleAddSubmit = (e) => {
		e.preventDefault();

		const checkDuplication = list.findIndex((n) =>
			n.content.includes(todo.content)
		);
		if (!todo.content || checkDuplication > -1) {
			setTodo({ content: '', check: false, id: '' });
			return;
		}
		setList([...list, todo]);
		setTodo({ content: '', check: false, id: '' });
	};
	const handleTextChange = (e) => {
		const content = e.target.value;
		const id = Math.random();
		setTodo({ ...todo, content, id });
	};
	const handleDeleteListClick = (e) => {
		const tId = e.target.id || e.target.nearestViewportElement.id;
		setList((prev) => prev.filter((l) => !l.content.includes(tId)));
	};

	return (
		<div className={styles.whole}>
			<div className={styles.wrapTodo}>
				<div className={styles.header}>
					<Hearder mode={mode} handelModeClick={handelModeClick} />
				</div>
				<div className={styles.body}>
					{list.length > 0 &&
						list.map((list) => (
							<Body
								key={list.id}
								checked={list.check}
								content={list.content}
								handleDeleteListClick={handleDeleteListClick}
								handleCheckedChange={handleCheckedChange}
							/>
						))}
				</div>
				<div className={styles.footer}>
					<Search
						content={todo.content}
						handleAddSubmit={handleAddSubmit}
						handleTextChange={handleTextChange}
					/>
				</div>
			</div>
		</div>
	);
}

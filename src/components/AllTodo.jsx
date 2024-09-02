import React, { useState } from 'react';
import styles from './AllTodo.module.css';
import Header from './Header';
import Body from './Body';
import Search from './Search';
// import { MdLogin } from 'react-icons/md';

export default function AllTodo() {
	const [todo, setTodo] = useState({
		content: '',
		check: false,
		id: '',
	});
	const [list, setList] = useState([]);
	const [filter, setFilter] = useState(0);
	const [mode, setMode] = useState(false);

	const handleModeClick = () => {
		setMode((prev) => !prev);
	};
	const handleFilterClick = (e) => {
		const idVal = e.target.id;
		setFilter(idVal);
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
	const handleCheckedChange = (e) => {
		console.log(e);

		const idVal = e.target.id;
		setList((prev) => {
			return prev.map((list) => {
				if (list.content.includes(idVal)) {
					return { ...list, check: !list.check };
				}
				return list;
			});
		});
	};
	const handleDeleteListClick = (e) => {
		const tId = e.target.id || e.target.nearestViewportElement.id;
		setList((prev) => prev.filter((l) => !l.content.includes(tId)));
	};

	return (
		<div className={`${styles.whole} ${mode && styles.whole_dark}`}>
			<div className={styles.wrapTodo}>
				<div className={`${styles.header} ${mode && styles.header_dark}`}>
					<Header
						mode={mode}
						filter={filter}
						handleModeClick={handleModeClick}
						handleFilterClick={handleFilterClick}
					/>
				</div>
				<div className={`${styles.body}  ${mode && styles.body_dark}`}>
					{list.length > 0 &&
						list.map((list) => {
							if (filter == 0) {
								return (
									<Body
										key={list.id}
										mode={mode}
										checked={list.check}
										content={list.content}
										handleDeleteListClick={handleDeleteListClick}
										handleCheckedChange={handleCheckedChange}
									/>
								);
							} else if (filter == 1 && list.check === false) {
								return (
									<Body
										key={list.id}
										mode={mode}
										checked={list.check}
										content={list.content}
										handleDeleteListClick={handleDeleteListClick}
										handleCheckedChange={handleCheckedChange}
									/>
								);
							} else if (filter == 2 && list.check === true) {
								return (
									<Body
										key={list.id}
										mode={mode}
										checked={list.check}
										content={list.content}
										handleDeleteListClick={handleDeleteListClick}
										handleCheckedChange={handleCheckedChange}
									/>
								);
							}
						})}
				</div>
				<div className={`${styles.footer}  ${mode && styles.footer_dark}`}>
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

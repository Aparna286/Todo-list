import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
	const [state, setState] = useState({
		item: "",
		items: [],
		id: uuidv4(),
		edit: false,
	});

	const handleDelete = (id) => {
		const filteredItem = state.items.filter((item) => item.id !== id);
		setState((prevState) => ({
			...prevState,
			items: filteredItem,
		}));
	};

	const handleUpdate = (id) => {
		const filteredItem = state.items.filter((item) => item.id !== id);
		const selectedItem = state.items.find((item) => item.id === id);

		setState((prevState) => ({
			...prevState,
			items: filteredItem,
			item: selectedItem.title,
			edit: true,
			id: id,
		}));
	};

	const handleClear = () => {
		setState((prevState) => ({
			...prevState,
			items: [],
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			id: state.id,
			title: state.item,
		};

		setState((prevState) => ({
			...prevState,
			items: [newItem, ...state.items],
			item: "",
			edit: false,
		}));
	};

	const handleChange = (e) => {
		let value = e.target.value;
		setState((prevState) => ({
			...prevState,
			item: value,
		}));
	};
	return (
		<Fragment>
			<div className="container d-flex flex-column align-items-center justify-content-center">
				<div className="row w-75">
					<div className="col">
						<TodoInput
							title={state.item}
							edit={state.edit}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						></TodoInput>
					</div>
				</div>
				<div className="row w-75">
					<div className="col">
						<TodoList
							items={state.items}
							handleClear={handleClear}
							handleDelete={handleDelete}
							handleUpdate={handleUpdate}
						></TodoList>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;

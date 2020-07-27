import React from "react";
import Item from "./Item";

const TodoList = ({ items, handleClear, handleDelete, handleUpdate }) => {
	return (
		<div>
			<h2 className="text-center my-3">Todo List</h2>
			<ul className="list-group my-5">
				{items.map((item) => {
					return (
						<Item
							key={item.id}
							title={item.title}
							handleDelete={() => handleDelete(item.id)}
							handleUpdate={() => handleUpdate(item.id)}
						/>
					);
				})}
			</ul>

			<button
				type="button"
				className="btn btn-block btn-danger my-3"
				onClick={handleClear}
			>
				Clear List
			</button>
		</div>
	);
};

export default TodoList;

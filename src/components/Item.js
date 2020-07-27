import React from "react";
import PropTypes from "prop-types";

const Item = ({ title, handleDelete, handleUpdate }) => {
	return (
		<div>
			<li className="list-group-item d-flex flex-row justify-content-between text-break">
				{title}
				<div className="todo-icon">
					<span className="mx-2" onClick={handleUpdate}>
						<i className="fas fa-pen text-success"></i>
					</span>
					<span className="mx-2" onClick={handleDelete}>
						<i className="fas fa-trash text-danger"></i>
					</span>
				</div>
			</li>
		</div>
	);
};

Item.propTypes = {
	itemTitle: PropTypes.string,
};

export default Item;

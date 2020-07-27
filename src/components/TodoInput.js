import React from "react";

const TodoInput = ({ title, handleChange, handleSubmit, edit }) => {
	return (
		<div>
			<h2 className="text-center my-3 ">Todo Input</h2>
			<div className="card card-body">
				<form onSubmit={handleSubmit}>
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text bg-primary text-white">
								<span class="fas fa-book"></span>
							</div>
						</div>

						<input
							type="text"
							class="form-control"
							placeholder="Todo-item"
							aria-label="Todo-Item"
							aria-describedby="fa-book"
							value={title}
							onChange={handleChange}
						></input>
					</div>
					<button
						type="submit"
						className={
							edit
								? "btn btn-block btn-success mt-3"
								: "btn btn-block btn-primary mt-3"
						}
					>
						{edit ? "Edit item" : "Add item"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default TodoInput;

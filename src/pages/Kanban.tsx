import React from 'react';
import Header from '../components/header';
import useAuth from '../hooks/useAuth';
import Task from '../modules/kanban/Task';
import { getTodos } from '../services/kanban.service';

type TodosType = {
	id: number;
	title: string;
	description: string;
	created_by: string;
	created_at: Date;
	updated_at: Date;
};

export default function Kanban() {
	const { accessToken } = useAuth();
	const [todos, setTodos] = React.useState<TodosType[]>([]);

	const getTasks = React.useCallback(async () => {
		const result = await getTodos(accessToken);

		if (result.error) {
			alert(result.message);
			return;
		}

		setTodos(result);
	}, []);

	React.useEffect(() => {
		getTasks();
	}, [getTasks]);

	return (
		<>
			<Header />
			<div className="relative top-16">
				<div className="container">
					<div className="min-w-min flex gap-4 py-6 last:pr-16">
						{todos.map((todo) => (
							<Task key={todo.id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

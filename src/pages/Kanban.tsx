import React from 'react';
import Header from '../components/header';
import useAuth from '../hooks/useAuth';
import Task from '../modules/kanban/Task';
import { getTodos } from '../services/kanban.service';
import type { TodoType } from '../types/kanban.type';

export default function Kanban() {
	const { accessToken } = useAuth();
	const [todos, setTodos] = React.useState<TodoType[]>([]);

	const getListTodo = React.useCallback(async () => {
		const result = await getTodos(accessToken);

		if (result.error) {
			alert(result.message);
			return;
		}

		setTodos(result);
	}, []);

	React.useEffect(() => {
		getListTodo();
	}, [getListTodo]);

	return (
		<>
			<Header callback={getListTodo} />
			<div className="relative top-16">
				<div className="container">
					<div className="min-w-min flex gap-4 py-6 last:pr-16">
						{todos.map((todo) => (
							<Task key={todo.id} todo={todo} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

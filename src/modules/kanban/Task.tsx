import React from 'react';
import clsx from 'clsx';
import { taskTheme } from '../../utils/constants';
import type { TaskPropsType, TaskType } from '../../types/kanban.type';
import { Chip } from '../../components';
import Content from './Content';
import { getItems } from '../../services/kanban.service';
import useAuth from '../../hooks/useAuth';

export default function Task({ todo }: TaskPropsType) {
	const keyTheme = Math.floor(Math.random() * 4);
	const { accessToken } = useAuth();
	const [tasks, setTasks] = React.useState<TaskType[]>([
		{
			id: 1,
			name: 'Redesign page',
			done: null,
			todo_id: 1,
			created_at: new Date('2021-04-21T00:12:06.116Z'),
			updated_at: new Date('2021-04-21T00:12:06.116Z'),
			progress_percentage: null,
		},
	]);

	// const getTasks = React.useCallback(async () => {
	// 	const result = await getItems(accessToken, todo.id);

	// 	if (result.error) {
	// 		alert(result.message);
	// 		return;
	// 	}

	// 	setTasks(result);
	// }, []);

	// React.useEffect(() => {
	// 	getTasks();
	// }, [getTasks]);

	return (
		<div
			className={clsx(
				'flex-none w-[326px] p-4 border rounded',
				taskTheme[keyTheme]
			)}
		>
			<Chip label={todo.title} keyVariant={keyTheme} />
			<p className="my-2 mx-0 text-[12px] text-[#404040] leading-5 font-bold">
				{todo.description}
			</p>
			{tasks.length > 0 ? (
				tasks.map((task) => <Content key={task.id} task={task} />)
			) : (
				<Content length={0} />
			)}
		</div>
	);
}

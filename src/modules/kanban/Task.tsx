import React from 'react';
import clsx from 'clsx';
import { taskTheme } from '../../utils/constants';
import type { TaskPropsType, TaskType } from '../../types/kanban.type';
import { Button, Chip, CustomForm, Modal, TextField } from '../../components';
import Content from './Content';
import { createItem, getItems } from '../../services/kanban.service';
import useAuth from '../../hooks/useAuth';

export default function Task({ todo }: TaskPropsType) {
	const keyTheme = Math.floor(Math.random() * 4);
	const { accessToken } = useAuth();
	const [tasks, setTasks] = React.useState<TaskType[]>([]);
	const modalRef = React.useRef<any>();

	const handleCreateTask = async (values: any) => {
		const payload = {
			...values,
			progress_percentage: Number(
				values.progress_percentage.replace('%', '')
			),
		};

		const result = await createItem(accessToken, todo.id, payload);

		if (result.error) {
			alert(result.message);
			return;
		}

		modalRef.current?.closeModal();
		getTasks();
	};

	const getTasks = React.useCallback(async () => {
		const result = await getItems(accessToken, todo.id);

		if (result.error) {
			alert(result.message);
			return;
		}

		setTasks(result);
	}, []);

	React.useEffect(() => {
		getTasks();
	}, [getTasks]);

	return (
		<>
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
				<button
					className="inline-flex gap-[5px] items-center"
					onClick={() => modalRef.current?.openModal()}
				>
					<img
						src="/icons/u_plus-circle.svg"
						alt="icon u plus circle"
					/>
					<span className="text-[12px] leading-5 text-[#1D1F20]">
						New Task
					</span>
				</button>
			</div>
			<Modal ref={modalRef} title="Create Task">
				<CustomForm onSubmit={handleCreateTask}>
					<div className="px-6">
						<TextField
							name="name"
							label="Task Name"
							placeholder="Type your Task"
						/>
						<TextField
							name="progress_percentage"
							label="Progress"
							placeholder="70%"
							className="w-[143px]"
						/>
					</div>
					<div className="flex justify-end p-6">
						<Button type="submit" label="Save Task" />
					</div>
				</CustomForm>
			</Modal>
		</>
	);
}

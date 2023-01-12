import React from 'react';
import clsx from 'clsx';
import { taskTheme } from '../../utils/constants';
import type { TaskType } from '../../types/kanban.type';
import { Chip } from '../../components';

export default function Task({ todo }: TaskType) {
	const keyTheme = Math.floor(Math.random() * 4);

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
		</div>
	);
}

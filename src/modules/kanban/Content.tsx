import React from 'react';
import { Card, Progress } from '../../components';
import { ContentPropsType } from '../../types/kanban.type';

export default function Content({ task, length }: ContentPropsType) {
	if (length === 0) {
		return (
			<Card className="mb-2 py-2">
				<span className="text-sm leading-6 text-[#757575]">
					No Task
				</span>
			</Card>
		);
	}

	return (
		<Card>
			<p className="mb-2 text-sm leading-6 font-bold text-[#404040]">
				{task?.name}
			</p>
			<hr className="border border-dashed border-[#E0E0E0]" />
			<Progress
				value={task?.progress_percentage ? task.progress_percentage : 0}
			/>
		</Card>
	);
}

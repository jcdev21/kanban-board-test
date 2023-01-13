export type TodoType = {
	id: number;
	title: string;
	description: string;
	created_by: string;
	created_at: Date;
	updated_at: Date;
};

export type TaskPropsType = {
	todo: TodoType;
};

export type TaskType = {
	id: number;
	name: string;
	done: boolean | null;
	todo_id: number;
	created_at: Date;
	updated_at: Date;
	progress_percentage: number | null;
};

export type ContentPropsType = {
	task?: TaskType;
	length?: number;
};

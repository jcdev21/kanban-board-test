export type TodoType = {
	id: number;
	title: string;
	description: string;
	created_by: string;
	created_at: Date;
	updated_at: Date;
};

export type TaskType = {
	todo: TodoType;
};

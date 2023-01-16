import React from 'react';
import useAuth from '../../hooks/useAuth';
import Button from '../button';
import CustomForm from '../form';
import Description from '../form/Description';
import TextField from '../form/TextField';
import Modal from '../modal';
import { createTodo, getTodos } from '../../services/kanban.service';

type HeaderProps = {
	callback: () => void;
};

export default function Header({ callback }: HeaderProps) {
	const { accessToken } = useAuth();
	const modalRef = React.useRef<any>();

	const openModal = () => {
		modalRef.current?.openModal();
	};

	const handleSaveNewGroup = async (values: any) => {
		const result = await createTodo(accessToken, values);

		if (result.error) {
			alert(result.message);
			return;
		}

		modalRef.current?.closeModal();
		callback();
	};

	return (
		<>
			<header className="fixed top-0 w-full h-16 z-10 bg-white flex items-center border-b border-[#E0E0E0]">
				<div className="container flex gap-2">
					<h1 className="text-lg font-bold text-[#1E1F21]">
						Product Roadmap
					</h1>
					<Button label="+ Add New Group" onClick={openModal} />
				</div>
			</header>
			<Modal ref={modalRef} title="Add New Group">
				<CustomForm onSubmit={handleSaveNewGroup}>
					<div className="px-6">
						<TextField
							name="title"
							label="Title"
							placeholder="Placeholder"
						/>
						<Description
							name="description"
							label="Description"
							placeholder="Placeholder"
							className="h-[88px]"
						/>
					</div>
					<div className="flex justify-end p-6">
						<Button type="submit" label="Submit" />
					</div>
				</CustomForm>
			</Modal>
		</>
	);
}

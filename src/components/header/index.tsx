import React from 'react';
import Button from '../button';
import CustomForm from '../form';
import TextField from '../form/TextField';
import Modal from '../modal';

export default function Header() {
	const modalRef = React.useRef<any>();

	const openModal = () => {
		modalRef.current?.openModal();
	};

	const handleSaveNewGroup = (values: any) => {
		console.log(values);
		modalRef.current?.closeModal();
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
					<TextField
						name="email"
						type="email"
						label="Email"
						placeholder="Email"
					/>
					<TextField
						name="password"
						type="password"
						label="Password"
						placeholder="Password"
					/>
					<div id="modal-footer" className="flex justify-end py-6">
						<Button type="submit" label="Submit" />
					</div>
				</CustomForm>
			</Modal>
		</>
	);
}

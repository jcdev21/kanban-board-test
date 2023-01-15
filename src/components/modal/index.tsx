import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import Button from '../button';

type ModalPropsType = {
	children: React.ReactNode;
	title: string;
};

const Modal = React.forwardRef(({ children, title }: ModalPropsType, ref) => {
	const [display, setDisplay] = React.useState<boolean>(false);

	React.useImperativeHandle(
		ref,
		() => {
			return {
				openModal: () => open(),
				closeModal: () => close(),
			};
		},
		[]
	);

	const open = () => {
		setDisplay(true);
	};

	const close = () => {
		setDisplay(false);
	};

	if (display) {
		return ReactDOM.createPortal(
			<div
				className={clsx(
					'fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-20',
					display && 'block'
				)}
			>
				<div
					className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-25"
					onClick={close}
				></div>
				<div className="w-[420px] min-h-fit bg-white rounded-[10px] shadow-md z-10">
					<div
						id="modal-header"
						className="w-full flex justify-between p-6"
					>
						<h2 className="text-lg font-bold text-[#1D1F20]">
							{title}
						</h2>
						<button onClick={close}>
							<img src="/icons/close.svg" alt="icon close" />
						</button>
					</div>
					<div id="modal-body">{children}</div>
				</div>
			</div>,
			document.getElementById('modal-root')!
		);
	}

	return null;
});

export default Modal;

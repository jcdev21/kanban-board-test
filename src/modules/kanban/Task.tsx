import React from 'react';
import clsx from 'clsx';
import { taskTheme } from '../../utils/constants';

export default function Task() {
	const keyTheme = Math.floor(Math.random() * 4);

	return (
		<div
			className={clsx(
				'flex-none w-[326px] p-4 border rounded',
				taskTheme[keyTheme]
			)}
		></div>
	);
}

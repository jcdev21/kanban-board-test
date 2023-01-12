import clsx from 'clsx';
import { labelTheme } from '../../utils/constants';

type ChipProps = {
	label: string;
	variant?: string;
	keyVariant?: number;
};

export default function Chip({ label, variant, keyVariant = 0 }: ChipProps) {
	return (
		<span
			className={clsx(
				'inline-flex px-2 py-[2px] text-[12px] leading-5 border rounded',
				labelTheme[keyVariant]
			)}
		>
			{label}
		</span>
	);
}

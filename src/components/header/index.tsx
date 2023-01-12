import Button from '../button';

export default function Header() {
	return (
		<header className="fixed top-0 w-full h-16 z-10 bg-white flex items-center border-b border-[#E0E0E0]">
			<div className="container flex gap-2">
				<h1 className="text-lg font-bold text-[#1E1F21]">
					Product Roadmap
				</h1>
				<Button label="+ Add New Group" />
			</div>
		</header>
	);
}

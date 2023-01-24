import React, { ReactNode } from 'react';
interface TitleProps {
	children: ReactNode;
}

function TitleComponent({ children }: TitleProps) {
	return (
		<div
			className="text-sm p-4 rounded-lg bg-[#B5B8BB] font-bold decoration-4 mb-5 text-stone-900 dark:text-white"
		>
			{children}
		</div>
	)
}

export default TitleComponent;
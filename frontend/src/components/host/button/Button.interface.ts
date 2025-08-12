import type { MouseEventHandler, ReactNode } from 'react';

export interface HostButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
}

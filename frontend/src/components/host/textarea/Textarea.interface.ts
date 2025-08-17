import type { ChangeEventHandler, ReactNode } from 'react';

export interface HostTextareaProps {
	value?: string;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
	placeholder?: string;
	className?: string;
	children?: ReactNode;
}

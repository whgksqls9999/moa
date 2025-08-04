import type { KeyboardEventHandler, MouseEventHandler } from 'react';

export interface InputProps {
	onClick?: MouseEventHandler<HTMLInputElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

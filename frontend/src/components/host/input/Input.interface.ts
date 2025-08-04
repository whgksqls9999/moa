import type { KeyboardEventHandler, MouseEventHandler } from 'react';

export interface HostInputProps {
	onClick?: MouseEventHandler<HTMLInputElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

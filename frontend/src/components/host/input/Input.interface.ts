import type {
	HTMLInputTypeAttribute,
	KeyboardEventHandler,
	MouseEventHandler,
} from 'react';

export interface HostInputProps {
	onClick?: MouseEventHandler<HTMLInputElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
	type?: HTMLInputTypeAttribute;
}

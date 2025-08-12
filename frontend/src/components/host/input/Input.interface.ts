import type {
	ChangeEventHandler,
	HTMLInputTypeAttribute,
	KeyboardEventHandler,
	MouseEventHandler,
} from 'react';

export interface HostInputProps {
	onClick?: MouseEventHandler<HTMLInputElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	type?: HTMLInputTypeAttribute;
}

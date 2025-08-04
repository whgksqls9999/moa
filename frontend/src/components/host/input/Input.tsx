import type { HostInputProps } from './Input.interface';
import Style from './Input.module.scss';

export function Input({ type, onClick, onKeyDown }: HostInputProps) {
	const classList = [Style.input];

	return (
		<input
			onClick={onClick}
			onKeyDown={onKeyDown}
			className={classList.join(' ')}
			type={type}
		/>
	);
}

import type { HostInputProps } from './Input.interface';
import Style from './Input.module.scss';

export function Input({ type, onClick, onKeyDown, onChange }: HostInputProps) {
	const classList = [Style.input];

	return (
		<input
			onClick={onClick}
			onKeyDown={onKeyDown}
			onChange={onChange}
			className={classList.join(' ')}
			type={type}
		/>
	);
}

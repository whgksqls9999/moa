import type { HostButtonProps } from './Button.interface';
import Style from './Button.module.scss';

export function Button({ onClick, children }: HostButtonProps) {
	const classList = [Style.button];

	return (
		<button className={classList.join(' ')} onClick={onClick}>
			{children}
		</button>
	);
}

import type { ButtonProps } from './Button.interface';
import Style from './Button.module.scss';

export function Button({ onClick }: ButtonProps) {
	const classList = [Style.button];

	return <button className={classList.join(' ')} onClick={onClick} />;
}

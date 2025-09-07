import type { HostTextareaProps } from './Textarea.interface';
import Style from './Textarea.module.scss';

export function Textarea({
	value,
	onChange,
	placeholder,
	className,
	children,
}: HostTextareaProps) {
	const classList = [Style.textarea, className].filter(Boolean).join(' ');

	return (
		<textarea
			className={classList}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		>
			{children}
		</textarea>
	);
}

import type { FormFieldProps } from './FormField.interface';
import Style from './FormField.module.scss';

export function FormField({ children, label }: FormFieldProps) {
	return (
		<div className={Style['form-field']}>
			<div className={Style['form-field-title']}>{label}</div>
			<div className={Style['form-field-item']}>{children}</div>
		</div>
	);
}

import { Input } from '@components';
import type { PasswordInputProps } from './PasswordInput.interface';
import Style from './PasswordInput.module.scss';

export function PasswordInput({}: PasswordInputProps) {
	return <Input type='password' />;
}

import { PasswordInput, Input } from '@components';

export function LoginForm() {
	return (
		<div>
			{/* [TODO] EmailInput? */}
			<Input type='email' />
			<PasswordInput />
		</div>
	);
}

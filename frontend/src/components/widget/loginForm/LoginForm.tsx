import { PasswordInput, Input, Button } from '@components';
import { useState, type ChangeEvent, type KeyboardEvent } from 'react';

export function LoginForm() {
	const { onChangeEmail, onChangePassword, loginAction, onKeyDown } =
		useLogin();

	return (
		<div>
			{/* [TODO] EmailInput? */}
			<Input type='email' onChange={onChangeEmail} />
			<PasswordInput onChange={onChangePassword} onKeyDown={onKeyDown} />
			<Button onClick={loginAction} />
		</div>
	);
}

function useLogin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
		const newEmailValue = e.target.value;

		if (email === newEmailValue) return;

		setEmail(newEmailValue);
	}

	function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
		const newPasswordValue = e.target.value;

		if (email === newPasswordValue) return;

		setPassword(newPasswordValue);
	}

	function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
		console.log(e.key);
		if (e.key === 'Enter') {
			loginAction();
		}
	}

	function loginAction() {
		alert('로그인!');
	}

	return { onChangeEmail, onChangePassword, onKeyDown, loginAction };
}

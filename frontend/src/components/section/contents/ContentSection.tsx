import { Outlet } from 'react-router-dom';

export function ContentSection() {
	return (
		<div className='contents'>
			<Outlet />
		</div>
	);
}

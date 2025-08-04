import { Outlet } from 'react-router-dom';
import './ContentSection.style.scss';

export function ContentSection() {
	return (
		<div className='contents'>
			<Outlet />
		</div>
	);
}

import { Outlet } from 'react-router-dom';
import './ContentSection.style.css';

export function ContentSection() {
	return (
		<div className='contents'>
			<Outlet />
		</div>
	);
}

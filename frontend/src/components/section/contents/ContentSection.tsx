import { Outlet } from 'react-router-dom';
import Style from './ContentSection.module.scss';

export function ContentSection() {
	return (
		<div className={Style.contents}>
			<Outlet />
		</div>
	);
}

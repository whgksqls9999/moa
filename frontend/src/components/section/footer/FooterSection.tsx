import { NavigationBar } from '@components';
import Style from './FooterSection.module.scss';

export function FooterSection() {
	return (
		<div className={Style.footer}>
			<NavigationBar />
		</div>
	);
}

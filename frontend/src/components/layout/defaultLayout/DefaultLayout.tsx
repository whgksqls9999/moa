import { ContentSection, FooterSection, HeaderSection } from '../../section';
import Style from './DefaultLayout.module.scss';

export function DefaultLayout() {
	return (
		<div className={Style.layout}>
			<HeaderSection />
			<ContentSection />
			<FooterSection />
		</div>
	);
}

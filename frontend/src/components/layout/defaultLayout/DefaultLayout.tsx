import { ContentSection, FooterSection, HeaderSection } from '../../section';
import './DefaultLayout.style.scss';

export function DefaultLayout() {
	return (
		<div className='layout'>
			<HeaderSection />
			<ContentSection />
			<FooterSection />
		</div>
	);
}

import { ContentSection, FooterSection, HeaderSection } from '../../section';
import './DefaultLayout.style.css';

export function DefaultLayout() {
	return (
		<div className='layout'>
			<HeaderSection />
			<ContentSection />
			<FooterSection />
		</div>
	);
}

import { Button, NavigationButton } from '@components';
import Style from './NavigationBar.module.scss';
import { EN_PAGE_ID } from '@application';

/**
 * 페이지 이동을 위한 하단 네비게이션 바
 */
export function NavigationBar() {
	const buttonItems = [
		{
			children: '메인',
			page: EN_PAGE_ID.MAIN_PAGE,
		},
		{
			children: '기록',
			page: EN_PAGE_ID.MAIN_PAGE,
		},
		{
			children: '채팅',
			page: EN_PAGE_ID.LOGIN_PAGE,
		},
	];
	return (
		<div className={Style['navigation-bar']}>
			{buttonItems.map((item) => (
				<NavigationButton page={item.page} key={item.children}>
					{item.children}
				</NavigationButton>
			))}
		</div>
	);
}

import { Button } from '@components';
import Style from './NavigationBar.module.scss';

/**
 * 페이지 이동을 위한 하단 네비게이션 바
 */
export function NavigationBar() {
	return (
		<div className={Style['navigation-bar']}>
			<Button>메인</Button>
			<Button>기록</Button>
			<Button>채팅</Button>
		</div>
	);
}

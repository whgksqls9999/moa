import { Button } from '@components';
import type { NavigationButtonProps } from './NavigationButton.interface';
import { EN_EVENT, eventHub } from '@application';

export function NavigationButton({ children, page }: NavigationButtonProps) {
	function onClick() {
		eventHub.emit(EN_EVENT.ROUTE_PAGE, page);
	}

	return <Button onClick={onClick}>{children}</Button>;
}

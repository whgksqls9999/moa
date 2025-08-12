import type { EN_PAGE_ID } from '@application';
import type { HostButtonProps } from '@components';

export interface NavigationButtonProps extends HostButtonProps {
	page: EN_PAGE_ID;
}

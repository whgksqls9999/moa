import { createBrowserRouter } from 'react-router-dom';

export class Navigator {
	private pageMap: { [key in EN_PAGE_ID]: string } = {
		LOGIN_PAGE: '/login',
		MAIN_PAGE: '/',
	};

	private router: ReturnType<typeof createBrowserRouter>;

	constructor(router: ReturnType<typeof createBrowserRouter>) {
		this.router = router;
	}

	goto(page: EN_PAGE_ID, options?: any) {
		const url = this.getPageUrl(page);
		this.router.navigate(url);
	}

	private getPageUrl(page: EN_PAGE_ID) {
		const url = this.pageMap[page];

		if (!url) {
			throw new Error('No Page Url Exists');
		}

		return url;
	}
}

export const enum EN_PAGE_ID {
	LOGIN_PAGE = 'LOGIN_PAGE',
	MAIN_PAGE = 'MAIN_PAGE',
}

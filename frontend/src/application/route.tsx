import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { DefaultLayout } from '@components';
import { LoginPage, MainPage } from '@pages';

export const routes: RouteObject[] = [
	{
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);

/** 추후 레이아웃을 주입받아 같은 페이지여도 다양한 레이아웃에 페이지 렌더링 */
function useLayout() {
	return DefaultLayout;
}

import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '@components';
import { LoginPage, HomePage } from '@pages';

export function AppRoutes() {
	const Layout = useLayout();

	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route element={<Layout />}>
				<Route path='/' element={<HomePage />} />
			</Route>
		</Routes>
	);
}

/** 추후 레이아웃을 주입받아 같은 페이지여도 다양한 레이아웃에 페이지 렌더링 */
function useLayout() {
	return DefaultLayout;
}

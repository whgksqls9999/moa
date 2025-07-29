import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components';

export function AppRoutes() {
	const Layout = useLayout();

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='' element={<div></div>} />
				<Route path='' element={<div></div>} />
				<Route path='' element={<div></div>} />
			</Route>
		</Routes>
	);
}

/** 추후 레이아웃을 주입받아 같은 페이지여도 다양한 레이아웃에 페이지 렌더링 */
function useLayout() {
	return DefaultLayout;
}

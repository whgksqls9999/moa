import { RouterProvider } from 'react-router-dom';
import { EN_EVENT, EventHub, eventHub } from './eventHub';
import { Navigator } from './navigator';
import { router } from './route';

function App() {
	const navigator = new Navigator(router);

	initializeEvent(eventHub, navigator);

	return <RouterProvider router={router} />;
}

function initializeEvent(eventHub: EventHub, navigator: Navigator) {
	eventHub.on(EN_EVENT.ROUTE_PAGE, navigator.goto.bind(navigator));
}

export default App;

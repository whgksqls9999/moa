import { EN_EVENT, EventHub } from './eventHub';
import { Navigator } from './navigator';
import { AppRoutes } from './route';

function App() {
	const navigator = new Navigator();
	const eventHub = new EventHub();

	return <AppRoutes />;
}

export default App;

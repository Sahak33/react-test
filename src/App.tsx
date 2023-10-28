import { AppContextProvider } from 'context/AppContext';
import AppRoutes from 'routes/routes';

const App: React.FC = () => (
	<AppContextProvider>
		<AppRoutes />
	</AppContextProvider>
);

export default App;

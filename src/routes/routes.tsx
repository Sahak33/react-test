import { Details, HomePage } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { HOME, DETAILS } from 'utils';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={HOME} element={<HomePage />} />
			<Route path={DETAILS} element={<Details />} />
		</Routes>
	);
};

export default AppRoutes;

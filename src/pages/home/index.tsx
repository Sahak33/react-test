import { Select, TableUser } from 'components';
import { useApp } from 'hooks/useUser';
import './home.scss';

const HomePage = () => {
	const { option } = useApp();
	return (
		<div className='wrapper'>
			<div className='wrapper__container'>
				<div className='select'>
					<Select option={option} />
				</div>
				<TableUser />
			</div>
		</div>
	);
};

export default HomePage;

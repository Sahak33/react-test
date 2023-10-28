import { useEffect } from 'react';
import { useApp } from 'hooks/useUser';
import { Link, useParams } from 'react-router-dom';
import './details.scss';

const Details = () => {
	const { selectUser, handleUsers, clearUser } = useApp();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			handleUsers(id);
		}
		return () => {
			clearUser();
		};
	}, []);

	return (
		<div className='details'>
			<Link to='/'>Back</Link>
			<div className='details__container'>
				<img src={selectUser?.avatar?.link} alt='user' />
				<ul className='users__info'>
					<li className='user'>{`${selectUser?.firstName} ${selectUser?.lastName}`}</li>
					<li className='user'>{selectUser?.email}</li>
					<li className='user'>{selectUser?.position}</li>
					<li className='user'>{selectUser?.phone}</li>
					<li className='manager_type'>Manager</li>
					<li className='manager'>{`${selectUser?.manager?.firstName} ${selectUser?.manager?.lastName}`}</li>
					<li className='manager'>{selectUser?.manager?.email}</li>
					<li className='manager'>{selectUser?.manager?.phone}</li>
					<li className='manager'>{selectUser?.manager?.position}</li>
					<li className='departament_type'>Departament</li>
					<li className='departament'>department:{selectUser?.department?.title}</li>
				</ul>
			</div>
		</div>
	);
};

export default Details;

import { Table } from 'react-bootstrap';
import { useApp } from 'hooks/useUser';
import { useNavigate } from 'react-router-dom';

const TableUser: React.FC = () => {
	const { users } = useApp();
	const navigate = useNavigate();

	const navigateUserDetails = (id: string) => () => navigate(`details/${id}`);

	return (
		<Table responsive='sm'>
			<thead>
				<tr>
					<th>#</th>
					<th>firstName</th>
					<th>lastName</th>
					<th>email</th>
					<th>position</th>
					<th>phone</th>
				</tr>
			</thead>
			<tbody>
				{users?.map((item, index) => (
					<tr key={item?.id} onClick={navigateUserDetails(item?.id)}>
						<td>{++index}</td>
						<td>{item?.firstName}</td>
						<td>{item?.lastName}</td>
						<td>{item?.email}</td>
						<td>{item?.position}</td>
						<td>{item?.phone}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TableUser;

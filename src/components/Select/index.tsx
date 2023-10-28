import Form from 'react-bootstrap/Form';
import { ISelectProps } from './types';
import { useApp } from 'hooks/useUser';

const Select: React.FC<{ option: ISelectProps[] }> = ({ option }) => {
	const { filterUsers } = useApp();
	return (
		<Form.Select aria-label='Default select example' onChange={filterUsers}>
			<option>Open this select menu</option>
			{option?.map((item, index: number) => (
				<option key={index} value={item?.userId}>
					{`${item?.startTime?.slice(0, 10)} - ${item?.endTime?.slice(0, 10)}`}
				</option>
			))}
		</Form.Select>
	);
};

export default Select;

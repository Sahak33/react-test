import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import selectData from 'assets/data/timesheets.json';
import userData from 'assets/data/users.json';
import { ITableUser } from 'types';
import { ISelectProps } from 'components/Select/types';

interface IAppContext {
	users: ITableUser[];
	option: ISelectProps[];
	selectUser: ITableUser | null;
	filterUsers: (_value: any) => void;
	handleUsers: (id: string) => void;
	clearUser: () => void;
}

export const AppContext = React.createContext<IAppContext>({
	users: [],
	option: [],
	selectUser: null,
	filterUsers: _value => null,
	handleUsers: _user => null,
	clearUser: () => null,
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [selectUser, setSelectUser] = useState<ITableUser | null>(null);
	const [option] = useState<ISelectProps[]>(selectData);
	const [users, setUsers] = useState<ITableUser[]>(userData as ITableUser[]);

	const filterUsers = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setUsers(userData?.filter(e => e.id === event?.target?.value) as ITableUser[]);
		},
		[setUsers],
	);

	const handleUsers = useCallback(
		(id: string) => {
			setSelectUser(users?.filter(el => el.id === id)?.[0]);
		},
		[setSelectUser, users],
	);
	const clearUser = useCallback(() => {
		setSelectUser(null);
	}, [setSelectUser]);

	const values: IAppContext = useMemo(() => ({ users, option, selectUser, filterUsers, handleUsers, clearUser }), [users, option, selectUser, filterUsers, handleUsers, clearUser]);
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

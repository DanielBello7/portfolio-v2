import React from "react";

type UserContext = {
	portfolio: null;
};

type Props = {
	children: React.ReactNode;
};

const UserContext = React.createContext({} as UserContext);

export function use_user() {
	return React.useContext(UserContext);
}

export function UserContextProvider(props: Props) {
	return (
		<UserContext.Provider
			value={{
				portfolio: null,
			}}>
			{props.children}
		</UserContext.Provider>
	);
}

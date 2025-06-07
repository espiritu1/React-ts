import React, { createContext,useState, useContext } from "react";

export const modalContext = createContext<{
	state: boolean;
	setState:React.Dispatch<React.SetStateAction<boolean>>;
}>({
	state: false,
	setState: () => null
})

export const ModalProvider = ({children}: {children: React.ReactNode}) => {
	const [state, setState] = useState<boolean>(false)
	return (
		<modalContext.Provider value={{ state, setState }}>
			{children}
		</modalContext.Provider>
	);
}
export const useModalContext = () => {
	const context = useContext(modalContext);

	if (!context) {
		throw new Error("Modal is being used outside its provider");
	}
	return context;
}
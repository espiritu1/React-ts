import { useRef } from "react";

export const FocusInput = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleButtonClick = () => {
		if (!inputRef.current) {
			console.log(`no existe la referencia al elemento`);
			return;
		}
		inputRef.current.focus();
	}

	return (
		<div>
			<input ref={inputRef} type="text"  placeholder="Escribe algo aqui..." />
			<button onClick={handleButtonClick}>enfocar el input</button>
		</div>
	)
}
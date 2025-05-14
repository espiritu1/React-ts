# Documentación del componente `App`

---

```js
import { useState } from 'react';
import './App.css'
import {Button} from './components'

// Componente principal de la aplicación que gestiona dos estados:
// - count: contador numérico que inicia en 0
// - name: cadena de texto que inicia en "fernando"
function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("fernando")

	// Función que incrementa el contador en 2
	const countMore = () => {
		// Se recomienda esta forma para actualizar el estado basado en su valor anterior
		setCount((count) => count + 1); 
 		setCount((count) => count + 1);
	}

	// Función que alterna el nombre entre "Fernando" y "Fere"
	const changeName = () => {
		setName(name === "Fernando" ? "Fere" : "Fernando");
	}

	return (
		<>
			{/* Botón que incrementa el contador */}
			<Button label={`count is ${count}`} parentMethod={countMore}/>
			{/* Muestra el nombre actual */}
			<p> {name}</p>
			{/* Botón que cambia el nombre */}
			<Button label='cambiar nombre' parentMethod={changeName}></Button>
		</>
	)
}

// Exporta el componente App como predeterminado
export default App


------------------------------------------------------------------------
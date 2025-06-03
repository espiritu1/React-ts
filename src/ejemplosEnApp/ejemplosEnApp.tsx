

// ejemplo de funcionamiento en de contex
import './App.css'
import { AppForm, Button, ColorRed } from '../components'
import { GlobalProvider } from '../context/global.provider'



function App() {

	
	const submit =() => {
		console.log("submited")
	}

	const handleClick = () => {
		console.log("uy me clikio todo World")
	}
	const dimeHola = () => {
		alert("hola")
	}

	return ( 
		<GlobalProvider>
			<ColorRed> <Button parentMethod={dimeHola}>my botton rojo</Button> </ColorRed>
			<Button parentMethod={handleClick}>my Boton normal  </Button>

			<AppForm>
				<button type="submit" onClick={submit}></button>
			</AppForm>
		
		</GlobalProvider>



	)
}
export default App

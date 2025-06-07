import './App.css'
import { Modal } from './components'
import {  useModalContext } from './components/Modal/Contex/ModalContext'

function App() {
	const {setState} = useModalContext()

	const openModal = () => {
		setState(true)
	}

	return ( 
		<>
		<Modal>
			<h2> hola NEGRO</h2>
			<h3>te quiero alan</h3>
		</Modal>
		
		<button onClick={openModal}>Abrete sesamo</button>

		</>
	)
}
export default App

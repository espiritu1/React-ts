import { useEffect, useState } from 'react';
import './App.css'

function App() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const  [error, setError] = useState("")

/* 	const consoleLoader = (loadingValue : boolean) => {
		setLoading(loadingValue)
		console.info(loading)
	} */

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')

			if (!response.ok) {
				throw new Error('Error al obtener datos')
			}
			
			const jsonData= await response.json()
			setData(jsonData)
		}catch (err) {
			setError(err as string)
		}finally {
			setLoading(false)
		}
	}

	useEffect(()=>{
		fetchData()
	},[])



	if (loading) {
		return <div>Cargando...</div>
	}

	if (error) {
		return <div>UPS! hay un error: {error}</div>
	}

	return (
		<div>{JSON.stringify(data)}</div> // manejar el estado de la memoria 
	)
}

export default App

// sync con entidades externas
// comunicar con un endpoint o una API
// parametros de entrada
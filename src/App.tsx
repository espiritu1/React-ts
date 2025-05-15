import './App.css'
import { useFetch } from './hooks'
const url = 'https://jsonplaceholder.typicode.com/posts'

interface Data{
	userId: number; 
	id: number;
	title: string;
	body: string;
}

function App() {
	const{data, error, loading} =useFetch<Data[]>(url)
	  


	
	
	if (loading) {
		return <div>Cargando...</div>
	}if (error) {
		return <div>UPS! hay un error: {error.message}</div>
	}return (	
		<>
		<div>
			{data?.map((item) => (
				<div key={item.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
					<h2>{item.title}</h2>
					<p><strong>ID:</strong> {item.id}</p>
					<p><strong>Usuario:</strong> {item.userId}</p>
					<p>{item.body}</p>
				</div>
			))}
		</div>
		
	{/* <div>{JSON.stringify(data)}</div>   escribe data en texto plano */}
	</>
	)

	

}

export default App

// sync con entidades externas
// comunicar con un endpoint o una API
// parametros de entrada
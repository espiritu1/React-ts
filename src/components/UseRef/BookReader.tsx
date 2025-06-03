//objetivo: nos permite crear una referencia mutable que persiste durante 
//			todo el ciclo de vida del componente

// SIN causar un re-render 
//objetivo 2: hacer referencai a un elemento del DOM

// curren sirve para mantener una varia qeu se utilizan de mananera interna  variable qeu no tiene impacto en el dom
//	Acceder a nodos del DOM o guardar valores que no disparan renders
//

import { useRef, useState } from 'react';

 export const BookReader = () => {
	const currentPageRef = useRef<number>(1);
	const [ currentPage, setCurrentPage ] = useState(1);

	const nextPage = () => {
		currentPageRef.current += 1;
		console.log(`Avanza a la pagina ${currentPageRef.current}`);
	}

	const previousPage = () => {
		if (currentPageRef.current === 1){
			console.log(`No se puede retroceder la pagina por qeu ya te encuentras en  ${currentPageRef.current}` )
			return;
		}
		currentPageRef.current -= 1;
		console.log(`Retrocede a la pagina ${currentPageRef.current}`);
	}


	const goPage = (page: number) => {
		if (page < 1) {
			console.log("no se puede saltar a una pagina imposible");
			return;
		}
		currentPageRef.current = page;
		setCurrentPage(page);
		console.log(`Salta al a pagina ${currentPageRef.current}`);
	}

	return(
		<div>
			<h2>lectura de libro</h2>
			<p>pagina actual :{currentPageRef.current}</p>
			<p>pagina actual [STATE]:{currentPage}</p>
			<button onClick={previousPage}> Pagina Acterior</button>
			<button onClick={nextPage}> pagina sigiente</button>
			<button onClick={()=>{goPage(100)}}> ir a la pagina 50</button>
		</div>
	)

}
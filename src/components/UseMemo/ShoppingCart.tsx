// Objetivo: memorizar (cachear) el resultado de una función costosa
// para evitar que se vuelva a ejecutar cada vez que se renderiza el componente.
// Se usa para optimizar el rendimiento de una aplicación.
// (que se utilice muchas veces un parametro que no cambia)

// Ejemplo:
// Tenemos una lista de compras y ya calculamos el costo total.
// Si no agregamos, eliminamos ni modificamos nada, ¿cuál es el costo total? 
// EL MISMO QUE ANTES.

// Para un cálculo costoso, podemos usar useMemo para memorizar el resultado
// y no tener que volver a calcularlo en cada renderizado.

// Pero si agregamos un nuevo ítem, cambiamos el precio o eliminamos uno,
// entonces el costo total sí cambia.

//desaparece en react 190
import { useMemo, useState } from "react";

interface Item{
	id: number;
	name: string;
	price: number;
}
export const ShoppingCart = () => {

	const [items, setItems] = useState<Item[]>([
		{
			id: 1,name: "manzana", price: 1.5,
		},
		{
			id:2,name: "pera", price: 2.0
		},
		{
			id:3,name: "leche", price: 1.0,
		}
	]);
	
	const [discount ,setDiscount] = useState<number>(0);

	const totalCost = useMemo(()=>
	items.reduce((total, item) => total + item.price, 0)
	,[items])

	const finalCost = useMemo(()=> totalCost - discount,[totalCost, discount])
	
	const addItem = () =>{
		const newItem = {
			id: items.length + 1,
			name: `producto ${items.length+1}` ,
			price: Math.random() * 5,
		}
		setItems([...items, newItem]);
	}
	
	return(
		<div>
			<h2>CLista de comppras</h2>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.name}:  ${item.price.toFixed(2)}
					</li>
				))}
			</ul>
			<p>Costo Total: ${totalCost.toFixed(2)}</p>
			<p>Descuento: $
				<input type="number" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value)|| 0 )} />
			</p>
			<p> Costo Final : ${ finalCost .toFixed(2)}</p>
			 
			 <button onClick = {addItem}> Agregar Producto </button>


		</div>
	)


}
import { useEffect, useState } from "react";

export const PromiseError = () => {
	const [data,setData] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				throw new Error("la promesa Hizo PUFF");
			} catch (err) {
				if(err instanceof Error){
					setError(err.message);
				
				}
			}
		}
		
		fetchData()
	},[])
	if (error) {
		throw new Error(error);
	} 

			return <div>{data}</div>
}
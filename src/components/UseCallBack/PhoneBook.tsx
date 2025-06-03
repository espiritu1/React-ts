//objetivo se utiliza para  memoerizar una instancia de una funcion,  ---- -- mientras qeu UseMemo guarda el resultado 
//hace que un hijo no rendece

import {memo, useCallback, useState } from "react";

//ejemplo 
//Supongamos  qeu tenemos un numero de telefono al qeu llamamos con frecuencia
//en vez de marcarlo continuamente lo vamos a almacenar en los contactos del telefono
//amenos que el numero cambie siempre utilizo el mismo contacto.

interface Contact{
	id: number;
	name: string;
	phone: string;
}

interface ContactProps{
	contact:Contact;
	onCall: (phone:string)=> void
}

const ContactCard = memo (({ contact, onCall }: ContactProps) => {
	console.log(`Rendering ContactCard: ${contact.name}`);

	return (
		<div>
			<h3>{contact.name}</h3>
			<p>telefono: {contact.phone}</p>
			<button onClick={() => onCall(contact.name)}>llamar</button>
		</div>
	);
},)

export const PhoneBook = () => {
	const [contacts, setContacts] = useState<Contact[]>([
		{id: 1, name: "manzana",	phone: "12345"},
		{id: 2, name: "pera",		phone: "56789"},
		{id: 3, name: "leche",		phone: "101112"}
	]);

	const [log, setLog ] =useState<string>('');

	const makeCall = useCallback((name: string) => setLog(`Llamando a ${name}`), []);

	const addContact = () => {
		const newContact: Contact = {
			id: contacts.length + 1,
			name: `contacto ${contacts.length + 1}`,
			phone: `${Math.floor(Math.random() * 100000)}`,
		};
		setContacts([...contacts, newContact]);
	}

	return(
		<div>
			<h2>Agenda de Contactos</h2>
			{contacts.map(contact => (
				<ContactCard key={contact.id} contact={contact} onCall={makeCall} />
			))}
			<button onClick={addContact}> agregar Contacto</button>
			<p>{log}</p>
		</div>
		)
}
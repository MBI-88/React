import React from 'react';
import './contact.css'
import { Link } from 'react-router-dom'

type Contact = {
    id: number,
    name: string,
    phone: string
}

const data: Contact[] = [
    {
        id: 1,
        name: 'Carlos Santana',
        email: 'carlos.santana@dev.education',
        phone: '415-307-3112'
    },
    {
        id: 2,
        name: 'John Smith',
        email: 'john.smith@dev.education',
        phone: '223-344-5122'
    },
    {
        id: 3,
        name: 'Alexis Nelson',
        email: 'alexis.nelson@dev.education',
        phone: '664-291-4477'
    }
]

type Props = {
    match: any
}

const Contacts: React.FC<Props> = (props) => {
    const [contacts, setContacts] = React.useState<Contact[]>(data)

    const { match: { params: { contactId } } } = props
    let selectContact: any = false
    if (contactId > 0) {
        selectContact = contacts.filter(item => item.id === Number(contactId))[0]

    }
    const simpleContact = ({ name, email, phone }: Contact) => (
        <>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </>
    )

    const renderContacts = () => (
        <ul>
            {contacts.map((contact: Contact, key) => (
                <li key={contact.id}>
                    <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
                </li>
            ))}
        </ul>)
    return (
        <div className='Contacts'>
            <h1>Contacts</h1>
            {selectContact ? simpleContact(selectContact): renderContacts()}
        </div>
    );
}


export default Contacts;
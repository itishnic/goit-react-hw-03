import initialContacts from "./contacts.json";




import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";





function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const addContact = (newContacts) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContacts];
    });
  };
    


const deleteContact = (contactId) => {
  console.log(contactId);
  
};




  const submit = (data) => {
    console.log('data : >>', data);
  }
 
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={submit} onAdd={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App










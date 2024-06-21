import initialContacts from "./contacts.json";

import { useState, useEffect } from "react";

import css from "./App.module.css";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("cardList");
    return savedContacts.length !== null
      ? JSON.parse(savedContacts)
      : initialContacts;
    
  });
  const [filter, setFilter] = useState("");

  const addContact = (newContacts) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContacts];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("cardList", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;

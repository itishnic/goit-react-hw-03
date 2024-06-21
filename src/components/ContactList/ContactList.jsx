import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"


  



const ContactList = ({contacts, onDelete}) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              data={contact}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList

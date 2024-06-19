import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import css from "./Contact.module.css";




const Contact = ({ id, name, number , onDelete}) => {
  return (
    <>
      <div className={css.contactButton}>
        <div>
          <p className={css.contactItem}>
            <IoPersonOutline size={20} />
            {name}
          </p>
          <p className={css.contactItem}>
            <BsTelephone size={20} />
            {number}
          </p>
        </div>
              <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  );
};

export default Contact;

import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { nanoid } from '@reduxjs/toolkit';

export default function ContactList() {
  
  const contacts = useSelector((state) => state.items);
  const search = useSelector((state) => state.filters.name);
  // console.log(contacts);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())) 
  

  return (
    <>
      {contacts.length !== 0 ? (
        <ul >
          {filterContacts.map(contact => (
            <li  key={nanoid()}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p >No contacts yet </p>
      )}

      {!filterContacts.length && contacts.length !== 0 && (
        <p >No contacts found </p>
      )}
    </>
  );
}

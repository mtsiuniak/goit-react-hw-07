import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { selectIsLoading } from "../../redux/selectors";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {filteredContacts.length === 0 && !isLoading ? (
        <p>No contacts found</p>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

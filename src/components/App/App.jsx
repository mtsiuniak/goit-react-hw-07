import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import "../../index.css";
import { useSelector } from "react-redux";

export default function App() {
  const allState = useSelector(state => state.items)
  console.log(allState);
  return (
    <div>
      <ContactForm/>
      <h1>Phonebook</h1>
      <SearchBox/>
      <ContactList/>
    </div>
  );
}




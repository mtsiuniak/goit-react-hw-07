import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
import { selectError, selectIsLoading } from "../../redux/selectors";
import "../../index.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <div>
      <ContactForm/>
      <h1>Phonebook</h1>
      <SearchBox/>
      {isLoading && !isError && (<BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#070707"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />)}
      <ContactList/>
    </div>
  );
}




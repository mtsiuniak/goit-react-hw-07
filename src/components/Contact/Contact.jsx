import css from './Contact.module.css'
import { AiFillPhone } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ data: { id, name, number }, }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    
    return <div className={css.container}>
        <div>
            <div className={css.textBlock}>
            <IoPerson  className={css.iconPerson} />
            <p className={css.text}>{name}</p>
           
        </div>
        <div className={css.textBlock}>
            <AiFillPhone className={css.iconPhone} />
            <p className={css.text}>{number}</p>
        </div>
        </div>
        
        <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
}
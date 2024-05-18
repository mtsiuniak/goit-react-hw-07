import { AiFillPhone } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css'

export default function Contact({ data }) {
    const dispatch = useDispatch();

    const handleDelete = () => {dispatch(deleteContact(data.id))};
    
    return <div className={css.container}>
        <div>
            <div className={css.textBlock}>
                <IoPerson  className={css.iconPerson} />
                <p className={css.text}>{data.name}</p>
            </div>
            <div className={css.textBlock}>
                <AiFillPhone className={css.iconPhone} />
                <p className={css.text}>{data.number}</p>
            </div>
        </div>
        
        <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
}
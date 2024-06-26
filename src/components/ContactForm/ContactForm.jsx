import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from "react-redux";
import css from './ContactForm.module.css'

export default function ContactForm() {
    const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId();
  
    const initialValues = {
    name: "",
    number: "",
    };
    const phoneRegExp = /^\d{3}-\d{3}-\d{4}$/;
    const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Is required"),
  number: Yup.string()
    .matches(phoneRegExp, "Invalid phone number, use format 111-111-1111")
    .required("Is required"),
});

const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
       onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.field}>
            <label htmlFor={nameId}>Name:</label>
            <Field className={css.input} type="text" name="name" id={nameId}/>
            <ErrorMessage className={css.error} name="name" component="div"  />
        </div>
        <div className={css.field}>
            <label htmlFor={numberId}>Number:</label>
            <Field className={css.input} type="text" name="number" id={numberId}/>
            <ErrorMessage className={css.error} name="number" component="div"  />
        </div>
        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}



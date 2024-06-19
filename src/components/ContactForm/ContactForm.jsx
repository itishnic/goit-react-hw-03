import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const validationSchema = Yup.object().shape({
id: Yup.string(),


  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()

    .min(7, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {

    const nameFieldId = useId();
    const numberFieldId = useId();

const handleSubmit = (values, { resetForm }) => {
  onAdd({
    id: Date.now(),
    name: values.name,
    number: values.number,
  });
  resetForm();
};


  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <br />
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
          <br />
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />
          <br />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

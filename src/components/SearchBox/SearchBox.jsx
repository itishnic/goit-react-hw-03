import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};



const SearchBox = () => {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                  <p>Find contact by name</p>
          <Field type="text" name="username" placeholder="Enter fullname" />
          
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;

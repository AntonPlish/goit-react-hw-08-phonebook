import { Formik, Form, Field, ErrorMessage} from 'formik';
import styled from '@emotion/styled';
import * as yup from 'yup';
import 'yup-phone';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const FormStyled = styled.section`
  padding: 8px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled(Field)`
  color: grey;
  font-size: 16px;
  margin-bottom: 8px;
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
  // number: yup.string().phone('UA').required(),
});

const ContactsForm = function () {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(addContact(values));
  };

  return (
    <FormStyled>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <Label>
            Name
            <br />
            <Input type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <br />
          <Label>
            Number
            <br />
            <Input type="tel" name="number"/>
            <ErrorMessage name="number" component="div" />
          </Label>
          <br />
          <button style={{ backgroundColor: 'lightgreen', border: '0', borderRadius: '5px', width: '150px', height: '30px' }}
            type="submit" name="addContact">
            Add contact
          </button>
        </Form>
      </Formik>
    </FormStyled>
  );
};

export default ContactsForm;
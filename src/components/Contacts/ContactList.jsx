import styled from '@emotion/styled';
import ContactItem from './ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContact, selectFilter } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const ListSlyled = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
`;

const ContactList = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const filterText = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListSlyled>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterText.toLowerCase())
        )
        .map((contact, id) => {
          return <li key={id}>{<ContactItem contact={contact} />}</li>;
        })}
    </ListSlyled>
  );
};

export default ContactList;
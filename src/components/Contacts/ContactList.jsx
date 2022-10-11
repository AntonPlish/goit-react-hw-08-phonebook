import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import ContactItem from './ContactItem';
import { selectContact, selectFilter } from 'redux/selectors';

const ListSlyled = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
`;

const ContactList = function () {
  const contacts = useSelector(selectContact);
  const filterText = useSelector(selectFilter);

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
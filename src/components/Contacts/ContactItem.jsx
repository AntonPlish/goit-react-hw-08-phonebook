import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const ContactItem = function ({ contact }) {
  const dispatch = useDispatch();
  const HandleDelete = id => dispatch(deleteContact(id));

  return (
    <ItemStyled>
      <span>{contact.name}:</span> <span>{contact.number}</span>
      <button
        style={{ backgroundColor: 'tomato', border: '0', borderRadius: '5px', width: '150px', height: '30px'}}
        type="button"
        name="deleteBtn"
        onClick={() => HandleDelete(contact.id)}
      >
        Delete
      </button>
    </ItemStyled>
  );
};

export default ContactItem;
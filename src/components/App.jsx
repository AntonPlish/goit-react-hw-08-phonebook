import ContactsForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{ width: '600px', fontSize: '12px', }}
    >
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
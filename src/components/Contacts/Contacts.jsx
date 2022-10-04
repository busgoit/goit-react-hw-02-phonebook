import PropTypes from 'prop-types';
import { ContactsList, Contact, Name, Number, Info } from './Contacts.styled';

const Contacts = ({ contacts, onClick }) => {
  return (
    <>
      {contacts.length !== 0 ? (
        <ContactsList>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <Name>{name}: </Name>
              <Number>{number}</Number>
              <button type="button" onClick={onClick} id={id}>
                delete
              </button>
            </Contact>
          ))}
        </ContactsList>
      ) : (
        <Info>No contacts in your Phonebook!</Info>
      )}
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

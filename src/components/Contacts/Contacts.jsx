import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  ContactsList,
  Contact,
  Name,
  Number,
  Button,
  Info,
} from './Contacts.styled';

const Contacts = ({ contacts, onClick }) => {
  return (
    <>
      {contacts.length !== 0 ? (
        <ContactsList onClick={onClick}>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <Name>{name}: </Name>
              <Number>{number}</Number>
              <Button type="button" id={id}>
                <TiDeleteOutline />
              </Button>
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

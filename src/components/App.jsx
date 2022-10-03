import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';
import Section from './Section';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
  };

  onFormSubmit = data => {
    const { contacts } = this.state;
    const { name, number } = data;

    if (contacts.some(contact => contact.name === name)) {
      return alert(
        `The contact for ${name} is already exist in your Phonebook!`
      );
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name, number }],
    }));
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts.length);

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.onFormSubmit} />
        </Section>
        <Section title="Contacts">
          {contacts.length === 0 ? (
            <p>No contacts in your Phonebook!</p>
          ) : (
            <Contacts contacts={contacts} />
          )}
        </Section>
      </>
    );
  }
}

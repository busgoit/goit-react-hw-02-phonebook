import { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Section from './Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  onInputChange = e => {
    if (e.currentTarget.name === 'name')
      this.setState({ name: e.currentTarget.value });
    if (e.currentTarget.name === 'number')
      this.setState({ number: e.currentTarget.value });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <Form name={name} number={number} onChange={this.onInputChange} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

import { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Section from './Section';

export class App extends Component {
  state = { contacts: [], name: '' };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
      </>
    );
  }
}

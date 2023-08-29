import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContact = form.elements.name.value;
    const newId = nanoid();
    this.setState(state => {
      state.contacts.push({ name: newContact, id: newId });
    });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm addContact={this.addContact}></ContactForm>
        <Contacts contacts={this.state.contacts}></Contacts>
      </div>
    );
  }
}

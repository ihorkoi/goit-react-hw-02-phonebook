import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContact = form.elements.name.value;
    const newNumber = form.elements.number.value;

    const newId = nanoid();
    this.setState(state => {
      return (state.contacts = [
        ...state.contacts,
        {
          name: newContact,
          number: newNumber,
          id: newId,
        },
      ]);
    });
    form.reset();
  };
  handleFilterState = evt => {
    this.setState({ filter: evt.target.value });
    console.log(this.state);
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
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <Filter onChange={this.handleFilterState}></Filter>
        <Contacts props={this.state}></Contacts>
      </div>
    );
  }
}

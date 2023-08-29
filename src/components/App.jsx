import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContact = form.elements.name.value;
    const newNumber = form.elements.number.value;
    const newId = nanoid();
    let alreadyIn = false;

    this.state.contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.toLowerCase()) {
        alreadyIn = true;
        return;
      }
    });
    this.setState(state => {
      if (!alreadyIn) {
        return (state.contacts = [
          ...state.contacts,
          {
            name: newContact,
            number: newNumber,
            id: newId,
          },
        ]);
      } else {
        alert(`${newContact} is already in contacts`);
      }
    });
    form.reset();
  };
  removeContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };
  handleFilterState = evt => {
    this.setState({ filter: evt.target.value });
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
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>

        {this.state.contacts.length === 0 ? (
          <p>You don`t have any contact yet</p>
        ) : (
          <>
            <h2>Contacts</h2>

            <Filter onChange={this.handleFilterState}></Filter>
            <Contacts
              props={this.state}
              removeContact={this.removeContact}
            ></Contacts>
          </>
        )}
      </div>
    );
  }
}

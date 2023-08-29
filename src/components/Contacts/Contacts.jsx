import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const {
      props: { contacts, filter },
    } = this.props;
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {contacts.map(({ name, id, number }) => {
            if (name.toLowerCase().includes(filter.toLowerCase())) {
              return (
                <li key={id}>
                  {name} {number}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

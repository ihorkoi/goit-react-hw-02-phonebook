import { Component } from 'react';

export const Contacts = ({ props: { contacts, filter }, removeContact }) => {
  // render() {
  //   console.log(this.props);
  //   const {
  //     props: { contacts, filter },
  //     removeContact,
  //   } = this.props;
  return (
    <div>
      <ul>
        {contacts.map(({ name, id, number }) => {
          if (name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <li key={id}>
                {name} {number}
                <button onClick={() => removeContact(id)}>Delete</button>
              </li>
            );
          }
          return '';
        })}
      </ul>
    </div>
  );
};
// }

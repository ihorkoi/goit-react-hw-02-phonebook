export const Contacts = ({ props: { contacts, filter }, removeContact }) => {
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

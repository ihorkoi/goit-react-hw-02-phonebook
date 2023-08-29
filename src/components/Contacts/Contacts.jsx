export const Contacts = ({ contacts }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

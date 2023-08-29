export const Contacts = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, id }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};

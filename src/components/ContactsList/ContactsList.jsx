import { ListItem, Button, Number } from './ContactList.styled';
export const Contacts = ({ props: { contacts, filter }, removeContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, id, number }) => {
          if (name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <ListItem key={id}>
                {name}: <Number>{number}</Number>
                <Button onClick={() => removeContact(id)}>Delete</Button>
              </ListItem>
            );
          }
          return '';
        })}
      </ul>
    </div>
  );
};
// }

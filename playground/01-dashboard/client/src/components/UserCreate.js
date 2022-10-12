import { Create, SimpleForm, TextInput } from "react-admin";

function UserCreate(props) {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
}

export default UserCreate;

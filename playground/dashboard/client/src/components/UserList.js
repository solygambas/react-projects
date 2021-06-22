import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from "react-admin";

function UserList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
}

export default UserList;

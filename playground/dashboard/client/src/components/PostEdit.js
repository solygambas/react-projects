import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

function PostEdit(props) {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
}

export default PostEdit;

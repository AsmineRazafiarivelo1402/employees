import {
  BooleanField,
  EmailField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  ListButton,
  EditButton,
} from "react-admin";
const InternShowActions = () => (
  <TopToolbar>
    <ListButton label="Retour à la liste" />
    <EditButton label="Modifier" />
  </TopToolbar>
);
export const InternShow = () => (
  <Show actions={InternShowActions()}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <EmailField source="email" />
      <TextField source="departement" />
      <ReferenceField source="employee_id" reference="employees">
        <TextField source="firstname" />
        <span> </span>
        <TextField source="lastname" />
      </ReferenceField>
      <BooleanField source="remunerate" />
      <BooleanField source="active" />
    </SimpleShowLayout>
  </Show>
);

import {
  BooleanField,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  ListButton,
  EditButton,
  useRecordContext,
} from "react-admin";
import { ManagerShow } from "../components/ManagerCard";
const InternShowActions = () => (
  <TopToolbar>
    <ListButton label="Retour à la liste" />
    <EditButton label="Modifier" />
  </TopToolbar>
);
const InternTitle = () => {
  const record = useRecordContext();

  if (!record) return <span>Chargement...</span>;
  return (
    <span>
      Modify: {record.firstname} {record.lastname}
    </span>
  );
};
export const InternShow = () => (
  <Show actions={InternShowActions()} title={<InternTitle />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <EmailField source="email" />
      <TextField source="departement" />
      <ManagerShow />
      {/* <ReferenceField source="employee_id" reference="employees">
        <TextField source="firstname" />
        <span> </span>
        <TextField source="lastname" />
      </ReferenceField> */}
      <BooleanField source="remunerate" />
      <BooleanField source="active" />
    </SimpleShowLayout>
  </Show>
);

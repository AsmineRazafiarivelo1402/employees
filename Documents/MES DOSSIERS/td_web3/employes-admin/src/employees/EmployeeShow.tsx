import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  TopToolbar,
  ListButton,
  EditButton,
  useRecordContext,
} from "react-admin";
import { InternsByManager } from "../components/InternsByManager";
import { DepartmentState } from "../components/DepartmentStats";

const EmployeeShowActions = () => (
  <TopToolbar>
    <ListButton label="Retour à la liste" />
    <EditButton label="Modifier" />
  </TopToolbar>
);
const EmployeeTitle = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <span>
      {record.firstname} {record.lastname}
    </span>
  );
};
export const EmployeeShow = () => (
  <Show actions={<EmployeeShowActions />} title={<EmployeeTitle />}>
    <SimpleShowLayout>
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <DepartmentState />
      <NumberField
        source="salary"
        label="Salary"
        options={{ style: "currency", currency: "EUR" }}
      />
      <BooleanField source="active" label="Actif" />
      <InternsByManager />
    </SimpleShowLayout>
  </Show>
);

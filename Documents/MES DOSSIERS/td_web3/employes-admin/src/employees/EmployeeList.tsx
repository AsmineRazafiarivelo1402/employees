import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
  SearchInput,
  SelectInput,
} from "react-admin";

const employeeFilters = [
  <SearchInput source="q" key="search" alwaysOn />,
  <SelectInput
    label="Département"
    source="departement"
    alwaysOn
    key="departement"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "Marketing", name: "Marketing" },
      { id: "RH", name: "RH" },
    ]}
  />,
];

export const EmployeeList = () => (
  <List filters={employeeFilters}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="departement" label="Département" />
      <NumberField
        source="salary"
        label="Salary"
        options={{ style: "currency", currency: "EUR" }}
      />
      <BooleanField source="active" label="Actif" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

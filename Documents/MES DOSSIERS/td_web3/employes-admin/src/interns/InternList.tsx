import {
  BooleanField,
  DataTable,
  EmailField,
  List,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton,
  SearchInput,
  SelectInput,
} from "react-admin";

const internsFilters = [
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

export const InternList = () => (
  <List filters={internsFilters}>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="firstname" />
      <DataTable.Col source="lastname" />
      <DataTable.Col source="email">
        <EmailField source="email" />
      </DataTable.Col>
      <DataTable.Col source="departement" />
      <DataTable.Col label="Employee">
        <ReferenceField source="employee_id" reference="employees">
          <TextField source="firstname" />
          <span> </span>
          <TextField source="lastname" />
        </ReferenceField>
      </DataTable.Col>
      <DataTable.Col source="remunerate">
        <BooleanField source="remunerate" />
      </DataTable.Col>
      <DataTable.Col source="active">
        <BooleanField source="active" />
      </DataTable.Col>
      <DataTable.NumberCol source="salary" />
      <EditButton />
      <DeleteButton />
    </DataTable>
  </List>
);

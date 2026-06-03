import { DataTable, ReferenceManyField, SimpleShowLayout } from "react-admin";
export const ManagerShow = () => {
  return (
    <SimpleShowLayout>
      <ReferenceManyField
        reference="employees"
        source="employee_id"
        label="Manager"
        target={"id"}
      >
        <DataTable>
          <DataTable.Col source="firstname" />
          <DataTable.Col source="lastname" />
          <DataTable.Col source="email" />
          <DataTable.Col source="active" />
        </DataTable>
      </ReferenceManyField>
    </SimpleShowLayout>
  );
};

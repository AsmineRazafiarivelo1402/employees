import { DataTable, ReferenceManyField, SimpleShowLayout } from "react-admin";

export const InternsByManager = () => {
  return (
    <SimpleShowLayout>
      <ReferenceManyField
        reference="interns"
        target="employee_id"
        label="Interns"
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

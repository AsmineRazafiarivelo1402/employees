import {
  Loading,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  useGetList,
  useRecordContext,
} from "react-admin";

export const DepartmentState = () => {
  const record = useRecordContext();
  const { data, isPending, error } = useGetList("employees", {});

  if (isPending) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!record || !data) return null;

  const sameDepartment = data.filter(
    (employee) => employee.departement === record.departement,
  );

  return (
    <>
      <SimpleShowLayout>
        <TextField source="departement" label="Department" />

        <strong>{sameDepartment.length} Employees in this department</strong>
      </SimpleShowLayout>
    </>
  );
};

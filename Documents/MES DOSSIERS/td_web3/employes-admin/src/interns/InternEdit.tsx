import {
  BooleanInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  useGetList,
  useRecordContext,
  FormDataConsumer,
  required,
  minValue,
} from "react-admin";
import { Employee } from "../interface";

export const InternEdit = () => {
  const { data: employees } = useGetList<Employee>("employees");

  const validateEmployeeId = (value: number) => {
    if (!value) {
      return "Le Manager ID est requis";
    }

    const employeeExists = employees?.find((emp) => emp.id === value);
    if (employeeExists?.active === false) {
      return "Choose active employee";
    }
    if (!employeeExists) {
      return `Employee with ${value} doesn't exist`;
    }
  };
  const InternTitle = () => {
    const record = useRecordContext();

    if (!record) return <span>Chargement...</span>;
    return (
      <span>
        Modifier : {record.firstname} {record.lastname}
      </span>
    );
  };
  return (
    <Edit title={<InternTitle />}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
        <TextInput source="email" />
        <TextInput source="departement" />
        <NumberInput
          source="employee_id"
          label="Manager"
          validate={validateEmployeeId}
          fullWidth
        />
        <BooleanInput source="remunerate" />
        <FormDataConsumer<{ remunerate: boolean }>>
          {({ formData }) =>
            formData.remunerate && (
              <NumberInput
                source="salary"
                label="Salary (€)"
                validate={[required(), minValue(1500)]}
                min={1500}
                fullWidth
              />
            )
          }
        </FormDataConsumer>
        <BooleanInput source="active" />
      </SimpleForm>
    </Edit>
  );
};

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
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { Employee } from "../interface";
import { DepartmentField } from "./InternCreate";
export const InternEdit = () => {
  const { data: employees } = useGetList<Employee>("employees");

  const InternTitle = () => {
    const record = useRecordContext();

    if (!record) return <span>Chargement...</span>;
    return (
      <span>
        Modify: {record.firstname} {record.lastname}
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
        <ReferenceInput source="employee_id" reference="employees">
          <SelectInput
            optionText={(record) => `${record.firstname} ${record.lastname}`}
            label="MANAGER"
            validate={required()}
            fullWidth
          />
        </ReferenceInput>
        <DepartmentField employees={employees} />

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

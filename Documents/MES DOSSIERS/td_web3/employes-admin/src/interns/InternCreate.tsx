import { useEffect } from "react";
import { useWatch, useFormContext } from "react-hook-form";
import {
  SelectInput,
  NumberInput,
  BooleanInput,
  required,
  minValue,
  email,
  FormDataConsumer,
  SimpleForm,
  TextInput,
  Create,
  useGetList,
  ReferenceInput,
} from "react-admin";

import { Employee } from "../interface";

const DepartmentField = ({ employees }: { employees?: Employee[] }) => {
  const employeeId = useWatch({ name: "employee_id" });
  const { setValue } = useFormContext();

  const selectedEmployee = employees?.find(
    (employee) => String(employee.id) === String(employeeId),
  );

  useEffect(() => {
    if (selectedEmployee) {
      setValue("departement", selectedEmployee.departement);
    }
  }, [selectedEmployee, setValue]);

  const choices = selectedEmployee
    ? [
        {
          id: selectedEmployee.departement,
          name: selectedEmployee.departement,
        },
      ]
    : [];

  return (
    <SelectInput
      source="departement"
      label="Département"
      choices={choices}
      validate={required()}
      fullWidth
    />
  );
};

export const InternCreate = () => {
  const { data: employees } = useGetList<Employee>("employees");

  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput
          source="firstname"
          label="FIRSTNAME"
          validate={required()}
          fullWidth
        />

        <TextInput
          source="lastname"
          label="LASTNAME"
          validate={required()}
          fullWidth
        />

        <TextInput
          source="email"
          label="EMAIL"
          validate={[required(), email()]}
          fullWidth
        />

        <ReferenceInput source="employee_id" reference="employees">
          <SelectInput
            optionText={(record) => `${record.firstname} ${record.lastname}`}
            label="MANAGER"
            validate={required()}
            fullWidth
          />
        </ReferenceInput>

        <DepartmentField employees={employees} />

        <BooleanInput source="remunerate" label="REMUNERATE" />

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

        <BooleanInput source="active" label="ACTIF" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
};

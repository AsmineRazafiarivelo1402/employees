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
} from "react-admin";

import { Employee } from "../interface";
export const InternCreate = () => {
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
      return "nothing";
    }
  };

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
          label="Email"
          validate={[required(), email()]}
          fullWidth
        />

        <NumberInput
          source="employee_id"
          label="Manager"
          validate={validateEmployeeId}
          fullWidth
        />

        <SelectInput
          source="departement"
          label="Département"
          choices={[
            { id: "Informatique", name: "Informatique" },
            { id: "Marketing", name: "Marketing" },
            { id: "RH", name: "RH" },
          ]}
          validate={required()}
          fullWidth
        />

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

        <BooleanInput source="active" label="Actif" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
};

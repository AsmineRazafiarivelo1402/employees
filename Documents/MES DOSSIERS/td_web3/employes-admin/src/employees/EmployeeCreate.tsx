import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  required,
  minValue,
  email,
} from "react-admin";

export const EmployeeCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput
        source="firstname"
        label="Prénom"
        validate={required()}
        fullWidth
      />
      <TextInput
        source="lastname"
        label="Nom"
        validate={required()}
        fullWidth
      />
      <TextInput
        source="email"
        label="Email"
        validate={(required(), email())}
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
      <NumberInput
        source="salary"
        label="Salary (€)"
        validate={[required(), minValue(1500)]}
        min={1500}
        fullWidth
      />
      <BooleanInput source="active" label="Actif" defaultValue={true} />
    </SimpleForm>
  </Create>
);

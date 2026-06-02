import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  required,
  minValue,
  useRecordContext,
} from "react-admin";

const EmployeeTitle = () => {
  const record = useRecordContext();

  if (!record) return <span>Chargement...</span>;
  return <span>Modifier : {record.firstname}</span>;
};

export const EmployeeEdit = () => (
  <Edit title={<EmployeeTitle />}>
    <SimpleForm>
      <TextInput
        source="firstname"
        label="Prénom"
        validate={required("tsy maintsy misy")}
        fullWidth
      />
      <TextInput
        source="lastname"
        label="Nom"
        validate={required()}
        fullWidth
      />
      <TextInput source="email" label="Email" validate={required()} fullWidth />
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
      <BooleanInput source="active" label="Actif" />
    </SimpleForm>
  </Edit>
);

import { Create, SimpleForm, TextInput, SelectInput, NumberInput, BooleanInput, required, minValue } from 'react-admin';

export const EmployeeCreate = () => (
    <Create>
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
                validate={required()} 
                fullWidth
            />
            <SelectInput 
                source="departement" 
                label="Département"
                choices={[
                    { id: 'Informatique', name: 'Informatique' },
                    { id: 'Marketing', name: 'Marketing' },
                    { id: 'RH', name: 'RH' },
                    { id: 'Finance', name: 'Finance' }
                ]}
                validate={required()}
                fullWidth
            />
            <NumberInput 
                source="salaire" 
                label="Salaire (€)" 
                validate={[required(), minValue(1500)]}
                min={1500}
                fullWidth
            />
            <BooleanInput 
                source="active" 
                label="Actif" 
                defaultValue={true}
            />
        </SimpleForm>
    </Create>
);
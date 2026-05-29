import { List, DataTable, EmailField } from "react-admin";

export const EmployeesList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="firstname" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            {/* <DataTable.Col source="address.street" />
            <DataTable.Col source="phone" />
            <DataTable.Col source="website" />
            <DataTable.Col source="company.name" /> */}
        </DataTable>
    </List>
);
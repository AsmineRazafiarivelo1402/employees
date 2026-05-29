import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { EmployeeList } from './employees/EmployeeList';
import { EmployeeCreate } from './employees/EmployeeCreate';

export const App = () => (
    <Admin dataProvider={dataProvider}>
<Resource name="employees" list={EmployeeList}  create={EmployeeCreate}/>
    </Admin>
);

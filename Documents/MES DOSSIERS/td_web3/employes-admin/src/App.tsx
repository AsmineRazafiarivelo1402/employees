import { Admin, ListGuesser, Resource } from "react-admin";

import jsonServerProvider from "ra-data-json-server";
// import { dataProvider } from "./dataProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeCreate } from "./employees/EmployeeCreate";
import { EmployeeEdit } from "./employees/EmployeeEdit";
import { EmployeeShow } from "./employees/EmployeeShow";
import { InternList } from "./interns/InternList";
const dataProvider = jsonServerProvider("http://localhost:3002");
export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      list={EmployeeList}
      create={EmployeeCreate}
      edit={EmployeeEdit}
      show={EmployeeShow}
    />
    <Resource
      name="interns"
      list={InternList}
      create={ListGuesser}
      show={ListGuesser}
      edit={ListGuesser}
    />
  </Admin>
);

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  departement: string;
  salary: number;
  active: boolean;
}
export interface Intern {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  employee_id: number;
  departement: string;
  salary: number;
  active: boolean;
}

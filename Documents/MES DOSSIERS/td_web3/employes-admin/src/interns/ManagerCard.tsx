// import {
//   BooleanField,
//   EmailField,
//   Loading,
//   NumberField,
//   Show,
//   SimpleShowLayout,
//   TextField,
//   useGetOne,
//   useRecordContext,
// } from "react-admin";
// export const ManagerShow = () => {
//   const record = useRecordContext();
//   const {
//     data: employee,
//     isPending,
//     error,
//   } = useGetOne(
//     "interns",
//     { id: employee.employee_id }, // utilisation de l'id extrait du stagiaire
//     { enabled: !!employee.employee_id },
//   );
//   if (isPending) {
//     return <Loading />;
//   }
//   if (error) {
//     return <p>ERROR</p>;
//   }
//   if (!employee) {
//     return <p>No manager found</p>;
//   }
//   return (
//     <Show>
//       <SimpleShowLayout>
//         <TextField source="firstname" label="Prénom" />
//         <TextField source="lastname" label="Nom" />
//         <EmailField source="email" label="Email" />
//         <TextField source="departement" label="Département" />
//         <NumberField
//           source="salary"
//           label="Salary"
//           options={{ style: "currency", currency: "EUR" }}
//         />
//         <BooleanField source="active" label="Actif" />
//         <TextField source={intern.firstname} />
//       </SimpleShowLayout>
//     </Show>
//   );
// };

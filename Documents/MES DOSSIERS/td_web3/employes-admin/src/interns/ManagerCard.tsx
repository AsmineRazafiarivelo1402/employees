import { Loading, useGetOne, useRecordContext } from "react-admin";
import { Employee } from "../interface";
export const ManagerShow = () => {
  const record = useRecordContext();
  const {
    data: manager,
    isPending,
    error,
  } = useGetOne<Employee>(
    "Intern",
    { id: record?.employee_id ?? 0 },
    {
      enabled: !!record?.employee_id,
    },
  );
  if (isPending) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  if (!manager) {
    return <p>No manager found</p>;
  }
  return (
    <>
      <strong>Manager: </strong>
      <p>
        {manager.firstname} {manager.lastname}
      </p>
    </>
  );
};

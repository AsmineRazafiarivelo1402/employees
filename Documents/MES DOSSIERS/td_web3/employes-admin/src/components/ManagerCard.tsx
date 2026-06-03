import { useRecordContext, useGetOne, Loading } from "react-admin";
import { Card, CardContent, Typography, Link } from "@mui/material";
import { Intern } from "../interface";

export const ManagerCard = () => {
  const record = useRecordContext<Intern>();

  const { data, isPending, error } = useGetOne(
    "employees",
    { id: record?.employee_id },
    { enabled: !!record?.employee_id },
  );

  if (isPending) return <Loading />;
  if (error) return <p>Erreur Loading.</p>;
  if (!data) return null;

  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">Manager</Typography>
        <Typography>
          <strong>Fullname :</strong> {data.firstname} {data.lastname}
        </Typography>
        <Typography>
          <strong>Departement :</strong> {data.departement}
        </Typography>
        <Typography>
          <strong>Email :</strong>{" "}
          <Link href={`mailto:${data.email}`}>{data.email}</Link>{" "}
        </Typography>
        <Typography>
          <strong>State :</strong> {data.active ? "true" : "false"}
        </Typography>
      </CardContent>
    </Card>
  );
};

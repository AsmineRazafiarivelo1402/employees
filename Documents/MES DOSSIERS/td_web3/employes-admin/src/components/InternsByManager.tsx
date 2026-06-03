import { useRecordContext, useGetList, Loading } from "react-admin";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { Employee } from "../interface";

export const InternsByManager = () => {
  const record = useRecordContext<Employee>();

  const { data, total, isPending, error } = useGetList(
    "interns",
    {
      pagination: { page: 1, perPage: 100 },
      filter: { employee_id: record?.id },
    },
    { enabled: !!record?.id },
  );

  if (isPending) return <Loading />;
  if (error) return <p>Erreur Loading</p>;

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Supervised interns ({total ?? 0})
      </Typography>

      {!data || data.length === 0 ? (
        <Typography color="text.secondary">
          Aucun stagiaire encadré pour le moment.
        </Typography>
      ) : (
        data.map((intern) => (
          <Box
            key={intern.id}
            sx={{
              p: 1.5,
              mb: 1,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontWeight="bold">
                {intern.firstname} {intern.lastname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {intern.email}
              </Typography>
              <Typography variant="body2">
                {intern.active ? "Actif" : "Inactif"}
              </Typography>
            </Box>
            <MuiLink component={Link} to={`/interns/${intern.id}/show`}>
              See More
            </MuiLink>
          </Box>
        ))
      )}
    </Box>
  );
};

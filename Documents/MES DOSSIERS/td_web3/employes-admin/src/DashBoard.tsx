import { useGetList } from "react-admin";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface StatCardProps {
  title: string;
  value: number | undefined;
  isPending: boolean;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, isPending, icon, color }: StatCardProps) => (
  <Card sx={{ height: "100%", borderTop: `4px solid ${color}` }}>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        py: 4,
      }}
    >
      <Typography variant="h6" color="text.secondary" textAlign="center">
        {title}
      </Typography>
      <Typography color={color} sx={{ mb: 1 }}>
        {icon}
      </Typography>
      {isPending ? (
        <CircularProgress size={40} sx={{ color }} />
      ) : (
        <Typography variant="h2" fontWeight="bold" color={color}>
          {value ?? "—"}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export const Dashboard = () => {
  const { total: totalEmployees, isPending: pendingEmployees } = useGetList(
    "employees",
    { pagination: { page: 1, perPage: 100 } },
  );

  const { total: totalActiveEmployees, isPending: pendingActiveEmployees } =
    useGetList("employees", {
      pagination: { page: 1, perPage: 100 },
      filter: { active: true },
    });

  const { total: totalInterns, isPending: pendingInterns } = useGetList(
    "interns",
    { pagination: { page: 1, perPage: 100 } },
  );

  const {
    total: totalRemuneratedInterns,
    isPending: pendingRemuneratedInterns,
  } = useGetList("interns", {
    pagination: { page: 1, perPage: 100 },
    filter: { isRemunerate: true },
  });

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total employés"
          value={totalEmployees}
          isPending={pendingEmployees}
          icon={<PeopleIcon fontSize="large" />}
          color="#1976d2"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Employés actifs"
          value={totalActiveEmployees}
          isPending={pendingActiveEmployees}
          icon={<PersonIcon fontSize="large" />}
          color="#388e3c"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total stagiaires"
          value={totalInterns}
          isPending={pendingInterns}
          icon={<SchoolIcon fontSize="large" />}
          color="#f57c00"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Stagiaires rémunérés"
          value={totalRemuneratedInterns}
          isPending={pendingRemuneratedInterns}
          icon={<AttachMoneyIcon fontSize="large" />}
          color="#7b1fa2"
        />
      </Grid>
    </Grid>
  );
};

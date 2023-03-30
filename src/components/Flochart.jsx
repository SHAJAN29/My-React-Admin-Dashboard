import { Chart as Chartjs } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Avatar, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Flochart(params) {
  const data = {
    labels: ["Direct", "Social", " Referral"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: [
          "rgba(78, 115, 223,1)",
          "rgba(28, 200, 138,1)",

          "rgba(54, 185, 204,1)",
        ],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className="flowBox">
      <Card sx={{ maxWidth: "450px", height: "auto" }}>
        <CardHeader
          sx={{ color: "#1976d2", backgroundColor: "#e4e5e9" }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Revenue Sourse"
        />
        <Doughnut data={data} options={options} />
      </Card>
    </div>
  );
}

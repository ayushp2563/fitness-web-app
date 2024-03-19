import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Carbs", "Protein", "Fat"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 9, 10],
      backgroundColor: [
        "rgba(255,165,0,255)",
        "rgba(138,43,226,255)",
        "rgba(150,75,0,255)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

export function NutritionChart() {
  return <Doughnut data={data} />;
}

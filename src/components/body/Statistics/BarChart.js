import React from "react";
import { Bar } from "react-chartjs-2";
import "./Style.css";
const BarChart = () => {
  return (
    <div className="chartContainer">
      <h1>Nombre de ventes par categorie</h1>
      <div>
        <Bar
          data={{
            labels: ["Tapis", "Textile", "Cuir", "Broderie", "Vannerie"],
            datasets: [
              {
                label: "",
                data: [],
                backgroundColor: [
                  "rgba(255, 51, 51, 1)",
                  "rgba(95, 40, 200, 1)",
                  "rgba(95, 31, 31, 1)",
                  "rgba(0, 192, 0, 1)",
                  "rgba(255, 128, 0, 1)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;

import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from "chart.js";
import styles from "./CurrencyPage.module.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const CurrencyPage = () => {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        const response = await axios.get(
          "https://openexchangerates.org/api/latest.json?app_id=db45438d2f2f4a75b5a6d5ac8236394e"
        );
        const newData = response.data;
        const fetchTime = new Date().getTime();
        localStorage.setItem(
          "MONO",
          JSON.stringify({ data: newData, fetchTime })
        );
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const storedData = localStorage.getItem("MONO");
    if (storedData) {
      const { data, fetchTime } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      if (currentTime - fetchTime < 3600000) {
        setData(data);
      } else {
        fetchDataAndStore();
      }
    } else {
      fetchDataAndStore();
    }
  }, []);

  useEffect(() => {
    if (data) {
      const rates = data.rates;
      const labels = ["USD", "EUR"];
      const values = [rates["USD"], rates["EUR"]];

      setChartData({
        labels,
        datasets: [
          {
            label: "Exchange Rates",
            data: values,
            borderColor: "#FF868D",
            backgroundColor: "rgba(255, 134, 141, 0.5)",
            fill: true,
          },
        ],
      });
    }
  }, [data]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.chartWrapper}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default CurrencyPage;

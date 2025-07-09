import { Chart, ChartConfiguration, registerables } from "chart.js";
import { link } from "fs";
import { timeSeriesCanvas } from "./components/TimeSeriesCanvas";


Chart.register(...registerables);


const dates: string[] = ["2025-07-10", "2025-07-11", "2025-07-12", "2025-07-13", "2025-07-14"];

const temperatures: number[] = [13, 61, 12, 28, 1];




const config: ChartConfiguration = {
    type: "line",
    data: {
        labels: dates,
        datasets: [
            {
                label: "Temperature (°C)",
                data: temperatures,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        scales: {
            x: {
                title: {
                display: true,
                text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                }
            }
        }
    }
};


new Chart(timeSeriesCanvas, config);
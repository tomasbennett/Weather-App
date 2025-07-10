import { Chart, ChartConfiguration, registerables } from "chart.js";
import { timeSeriesCanvas } from "../components/TimeSeriesCanvas";

// Hold a reference to the chart so we can update it later
let chartInstance: Chart | null = null;

export function constructChart(dates: string[], temperatures: number[]): void {
    Chart.register(...registerables);

    const ctx = timeSeriesCanvas.getContext("2d");
    if (!ctx) return;

    // If chart already exists, update the data instead of creating a new one
    if (chartInstance) {
        chartInstance.data.labels = dates;
        chartInstance.data.datasets[0].data = temperatures;
        chartInstance.update();
        return;
    }

    // First-time chart creation
    const config: ChartConfiguration = {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Temperature (°C)",
                    data: temperatures,
                    borderColor: 'rgba(255, 255, 255, 1)',
                    fill: false,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date',
                        color: 'rgba(255, 255, 255, 1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperature (°C)',
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            }
        }
    };

    chartInstance = new Chart(ctx, config);
}
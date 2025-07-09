import { Chart, ChartConfiguration, registerables } from "chart.js";
import { timeSeriesCanvas } from "./components/TimeSeriesCanvas";
import { IScreenData } from "./models/ScreenDataSchema";



async function runScreenData(city: string): Promise<void> {
    const importedData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=QX7YVMKWSVCC9FAWFJ764XJ2C`);
    const importedJSON = await importedData.json() as IScreenData;
    
    if (importedJSON)

    return;

}


































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
                borderColor: 'rgba(255, 255, 255, 1)',
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


new Chart(timeSeriesCanvas, config);
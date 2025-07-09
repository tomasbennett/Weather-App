import { IDataRetrieval } from "../models/IDataRetrieval";
import { IScreenData } from "../models/ScreenDataSchema";

// export class DataRetrieval implements IDataRetrieval {
//     private incomingData!: IScreenData;

//     constructor(private ) {}

//     async initRequest(city: string): Promise<void> {
//         const fetchData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=QX7YVMKWSVCC9FAWFJ764XJ2C`);
//         const fetchJSON = await fetchData.json();
//         this.incomingData = fetchJSON;
//     }

//     retrieve(): { city: string; fullAddress: string; description: string; temp: number; minTemp: number; maxTemp: number; feelsLike: number; tempTimeSeries: { temp: number; date: Date; }[]; } {
        


//         return this.incomingData;
//     }

// }


// export abstract class DataRetrievalFactory {
//     init(): void {
//         const instance: IDataRetrieval = this.create();


//     }

//     protected abstract create(): IDataRetrieval;
// }


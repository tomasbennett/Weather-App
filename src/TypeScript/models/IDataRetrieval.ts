import { IScreenData } from "./ScreenDataSchema";

export interface IDataRetrieval {
    initRequest(city: string): void;

    retrieve(): IScreenData;
}
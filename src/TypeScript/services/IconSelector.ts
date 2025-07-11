import { datetimeRegex } from "zod";
import { nightIcon, nightVideo, rainIcon, rainyVideo, snowIcon, snowyVideo, sunnyIcon, sunnyVideo } from "../components/IconAndVideo";
import { openingElement } from "./Opening";
import { IHTMLChangeMemento } from "../models/IMemento";
import { HTMLChangeMemento } from "./HTMLChangeMemento";


const videoState: IHTMLChangeMemento = new HTMLChangeMemento();

export function extractHour(timeString: string): number {
    const [hourStr] = timeString.split(":"); // Split and take the first part (hour)
    const hour = parseInt(hourStr, 10);

    return hour;
}


function isBetweenHours(datetimeepoch: number): boolean {

    return datetimeepoch >= 20 || datetimeepoch < 6;
}



export function iconVideoSelector(datetimeepoch: number, snow: number, precip: number): void {
    if (isBetweenHours(datetimeepoch)) {
        openingElement(nightIcon as HTMLElement);
        videoState.changeHTMLState(nightVideo);

    } else if (snow > 0) {
        //Snow
        openingElement(snowIcon as HTMLElement);
        videoState.changeHTMLState(snowyVideo);

    } else if (precip > 0) {
        //Rain
        openingElement(rainIcon as HTMLElement);
        videoState.changeHTMLState(rainyVideo);

    } else {
        //Sun
        openingElement(sunnyIcon as HTMLElement);
        videoState.changeHTMLState(sunnyVideo);

    }
}


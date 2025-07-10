import { latLongContainer } from "../components/WeatherInfoComponents";

export function failedRequest(): void {
    const errors: NodeListOf<Element> = document.querySelectorAll(".not-found")!;
    
    errors.forEach(err => {
        (err as HTMLElement).style.display = "flex";
        err.setAttribute("data-animation", "opening");
    });
}
import { cityNameContainer, addressContainer, descContainer, latitudeContainer, longitutdeContainer } from "../components/WeatherInfoComponents";

export function setData(container: HTMLElement, text: string): void {
    container.classList.remove("no-content");
    container.textContent = text;
}


export function setTempData(container: HTMLElement, tempContainer: HTMLElement, temp: number): void {
    tempContainer.textContent = temp.toString();
    // container.setAttribute("");
}





export function noData(container: HTMLElement): void {
    container.classList.add("no-content");
    container.textContent = String.fromCharCode(9888) + " content unavialable";
}


function NoDataReceived(): void {
    noData(cityNameContainer);
    noData(addressContainer);
    noData(descContainer);
    noData(latitudeContainer);
    noData(longitutdeContainer);
}






function setIconAndVideo(): void {

}
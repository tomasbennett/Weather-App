import { tempContainer } from "../components/WeatherInfoComponents";
import { IDegreeChangeCommand } from "../models/ICommand";

export function celciusToFarenheit(celcius: number): number {
    return Math.round(celcius * 9 / 5 + 32);
}


export function farenhiteToCelcius(farenhite: number): number {
    return Math.round((farenhite - 32) * 5 / 9);
}


export class DegreeChange implements IDegreeChangeCommand {
    private isFarenhite: boolean;

    private tempNumber: HTMLElement;
    private tempDegree: HTMLElement;

    constructor(private tempContainer: HTMLElement) {
        this.isFarenhite = true;

        this.tempNumber = this.tempContainer.querySelector(".temp-number")!;
    
        this.tempDegree = this.tempContainer.querySelector(".temp-degree")!;
    }
    setIsFarenheit(def: boolean): void {
        this.isFarenhite = def;
    }

    public execute: () => void = () => {
        this.tempContainer.removeEventListener("click", this.execute);

        this.tempContainer.setAttribute("data-animation", "closing");
        
        this.tempContainer.addEventListener("animationend", () => {
            if (this.isFarenhite) {
                this.tempNumber.textContent = farenhiteToCelcius(Number(this.tempNumber.textContent)).toString();
                
                this.tempDegree.textContent = "c";

            } else {
                this.tempNumber.textContent = celciusToFarenheit(Number(this.tempNumber.textContent)).toString();

                this.tempDegree.textContent = "F";

            }

            this.isFarenhite = !this.isFarenhite;

            this.tempContainer.setAttribute("data-animation", "opening");

            this.tempContainer.addEventListener("click", this.execute);

        }, { once: true });
    }

}
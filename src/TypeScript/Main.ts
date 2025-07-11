import { timeSeriesCanvas } from "./components/TimeSeriesCanvas";
import { IScreenData } from "./models/ScreenDataSchema";
import { addressContainer, cityNameContainer, descContainer, feelsLikeContainer, feelsLikeNumber, feelsLikeTempDegree, latLongContainer, latitudeContainer, longitutdeContainer, tempContainer, todayTempDegree, todayTempNumber } from "./components/WeatherInfoComponents";
import { searchForm, searchInput } from "./components/SearchForm";
import { failedRequest } from "./services/FailedRequest";
import { openingElement } from "./services/Opening";
import { constructChart } from "./services/ChartConfig";
import { IDegreeChangeCommand } from "./models/ICommand";
import { DegreeChange } from "./services/CelciusFarenheit";
import { extractHour, iconVideoSelector } from "./services/IconSelector";

const tempDegreeChange: IDegreeChangeCommand = new DegreeChange(tempContainer);
const feelsLikeDegreeChange: IDegreeChangeCommand = new DegreeChange(feelsLikeContainer);



async function runScreenData(city: string): Promise<void> {
    try {
        const importedData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=QX7YVMKWSVCC9FAWFJ764XJ2C`);
        
        openingElement(latLongContainer);
        if (importedData?.status !== 200) {
            
            failedRequest();

            return;

        }
        
        
        const importedJSON = await importedData.json() as IScreenData;


        if (
            importedJSON?.latitude !== undefined &&
            typeof importedJSON?.latitude === "number"
        ) {
            latitudeContainer.textContent = importedJSON?.latitude.toString();
            openingElement(latitudeContainer);

        } else {
            const error: Element = latitudeContainer.nextElementSibling!;
            openingElement(error as HTMLElement);

        }


        if (
            importedJSON?.longitude !== undefined &&
            typeof importedJSON?.longitude === "number"
        ) {
            longitutdeContainer.textContent = importedJSON?.longitude.toString();
            openingElement(longitutdeContainer);
        
        } else {
            const error: Element = longitutdeContainer.nextElementSibling!;
            openingElement(error as HTMLElement);

        }




        if (
            importedJSON?.address !== undefined && 
            typeof importedJSON?.address === "string" &&
            importedJSON?.address?.length >= 1
        ) {
            cityNameContainer.textContent = importedJSON?.address;
            openingElement(cityNameContainer);

        } else {
            const error: Element = cityNameContainer.nextElementSibling!;
            openingElement(error as HTMLElement);

        }

        if (
            importedJSON?.resolvedAddress !== undefined &&
            typeof importedJSON?.resolvedAddress === "string" &&
            importedJSON?.resolvedAddress?.length >= 1
        ) {
            addressContainer.textContent = importedJSON?.resolvedAddress;
            openingElement(addressContainer);

        } else {
            const error: Element = addressContainer.nextElementSibling!;
            openingElement(error as HTMLElement);

        }




        if (
            importedJSON?.description !== undefined &&
            typeof importedJSON?.description === "string" &&
            importedJSON?.description?.length >= 1
        ) {
            descContainer.textContent = importedJSON?.description;
            openingElement(descContainer);

        } else {
            const error: Element = descContainer.nextElementSibling!;
            openingElement(error as HTMLElement);

        }





        if (
            importedJSON?.currentConditions?.temp !== undefined &&
            typeof importedJSON?.currentConditions?.temp === "number"
        ) {
            todayTempNumber.textContent = importedJSON?.currentConditions?.temp?.toString();
            openingElement(tempContainer);

            tempDegreeChange.setIsFarenheit(true);
            todayTempDegree.textContent = "F";
            
            tempContainer.addEventListener("click", tempDegreeChange.execute);

        } else {
            const error: Element = tempContainer.nextElementSibling!;
            openingElement(error as HTMLElement);

        }



        if (
            importedJSON?.currentConditions?.feelslike !== undefined &&
            typeof importedJSON?.currentConditions?.feelslike === "number"
        ) {
            feelsLikeNumber.textContent = importedJSON?.currentConditions?.feelslike?.toString();
            openingElement(feelsLikeContainer);
            
            feelsLikeDegreeChange.setIsFarenheit(true);
            feelsLikeTempDegree.textContent = "F";

            feelsLikeContainer.addEventListener("click", feelsLikeDegreeChange.execute);


        } else {
            const error: Element = feelsLikeContainer.nextElementSibling!;
            openingElement(error as HTMLElement);

        }

        if (
            importedJSON?.days !== undefined &&
            importedJSON?.days !== null
        ) {
            let days: string[] = [];
            let temperature: number[] = [];

            for (const day of importedJSON?.days) {
                days.push(day?.datetime);
                temperature.push(day?.temp);

            }

            constructChart(days, temperature);
            openingElement(timeSeriesCanvas);

        } else {
            const error: Element = timeSeriesCanvas.nextElementSibling!;
            openingElement(error as HTMLElement);

        }


        if (
            typeof importedJSON?.currentConditions?.datetime === "string" &&
            typeof importedJSON?.currentConditions?.snow === "number" &&
            typeof importedJSON?.currentConditions?.precip === "number"
        ) {

            iconVideoSelector(extractHour(importedJSON?.currentConditions?.datetime), importedJSON?.currentConditions?.snow, importedJSON?.currentConditions?.precip);


        } else {
            const error: HTMLElement = document.getElementById("no-icon-available")!;
            openingElement(error as HTMLElement);

        }




        







        // if (
        //     importedJSON?.address !== undefined && 
        //     typeof importedJSON?.address === "string" &&
        //     importedJSON?.address?.length >= 1
        // ) {
        //     setData(cityNameContainer, importedJSON?.address);
        // } else {
        //     noData(cityNameContainer);
        // }

        // if (
        //     importedJSON?.resolvedAddress !== undefined &&
        //     typeof importedJSON?.resolvedAddress === "string" &&
        //     importedJSON?.resolvedAddress?.length >= 1
        // ) {
        //     setData(addressContainer, importedJSON?.resolvedAddress);
        // } else {
        //     noData(addressContainer);
        // }

        // if (
        //     importedJSON?.description !== undefined &&
        //     typeof importedJSON?.description === "string" &&
        //     importedJSON?.description?.length >= 1
        // ) {
        //     setData(descContainer, importedJSON?.description);
        // } else {
        //     noData(descContainer);
        // }

        // if (
        //     importedJSON?.latitude !== undefined &&
        //     typeof importedJSON?.latitude === "number"
        // ) {
        //     setData(latitudeContainer, importedJSON?.latitude.toString());
        // } else {
        //     noData(latitudeContainer);
        // }

        // if (
        //     importedJSON?.longitude !== undefined &&
        //     typeof importedJSON?.longitude === "number"
        // ) {
        //     setData(longitutdeContainer, importedJSON?.longitude.toString());
        // } else {
        //     noData(longitutdeContainer);
        // }




        // if (
        //     importedJSON?.currentConditions?.temp !== undefined &&
        //     typeof importedJSON?.currentConditions?.temp === "number"
        // ) {
            

        // } else {


        // }





        
    } catch(e) {

        failedRequest();

        console.log("Error is: " + e);

    }
}




const city: string = "London";
searchInput.value = city;
runScreenData(city);



searchForm.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    tempContainer.removeEventListener("click", tempDegreeChange.execute);
    feelsLikeContainer.removeEventListener("click", feelsLikeDegreeChange.execute);

    


    const allOpen = document.querySelectorAll("[data-animation='opening']");
    const promises: Promise<void>[] = [];

    for (const elem of allOpen) {
        const el = elem as HTMLElement;
        el.setAttribute("data-animation", "closing");

        const promise = new Promise<void>((resolve) => {
            el.addEventListener("animationend", () => {
                el.style.display = "none";
                resolve(); 
            }, 
            { once: true });
        });

        promises.push(promise);
    }

    await Promise.all(promises);

    runScreenData(searchInput.value);
});




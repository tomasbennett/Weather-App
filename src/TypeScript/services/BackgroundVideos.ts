export function setData(container: HTMLElement, text: string): void {
    container.classList.remove("no-content");
    container.textContent = text;
}

export function noData(container: HTMLElement): void {
    container.classList.add("no-content");
    container.textContent = String.fromCharCode(9888) + " content unavialable";
}
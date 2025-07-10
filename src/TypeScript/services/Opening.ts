export function openingElement(elem: HTMLElement): void {
    elem.style.display = "flex";
    elem.setAttribute("data-animation", "opening");
}
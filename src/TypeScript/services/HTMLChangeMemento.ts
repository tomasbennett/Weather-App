import { IHTMLChangeMemento } from "../models/IMemento";

export class HTMLChangeMemento implements IHTMLChangeMemento {
    private htmlState?: HTMLElement;

    changeHTMLState(nextHTML: HTMLElement): void {

        nextHTML.setAttribute("data-visible", "open");

        if (!this.htmlState) {
            nextHTML.style.zIndex = "1";

        } else if (this.htmlState !== nextHTML) {
            this.htmlState.setAttribute("data-visible", "closing");
    
            const currHTML: HTMLElement = this.htmlState;

            this.htmlState.addEventListener("animationend", () => {
    
                currHTML!.setAttribute("data-visible", "closed");
                currHTML!.style.zIndex = "0";
    
                nextHTML.style.zIndex = "1";

    
            }, { once: true });

        }


        this.htmlState = nextHTML;
    }
    getCurrentState(): HTMLElement {
        return this.htmlState!;
    }

    

}
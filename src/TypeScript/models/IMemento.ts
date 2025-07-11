export interface IHTMLChangeMemento {
    changeHTMLState(nextHTML: HTMLElement): void;

    getCurrentState(): HTMLElement;
}
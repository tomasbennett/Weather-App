export interface IDegreeChangeCommand {
    execute(): void;

    setIsFarenheit(def: boolean): void;
}
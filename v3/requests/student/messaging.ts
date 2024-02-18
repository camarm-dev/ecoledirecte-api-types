import {body} from "../default/body";

export interface textbookSetDoneStatusRequestData extends body  {
    anneeMessages: string;
}

export interface textbookSetDoneStatusRequestData extends body {
    idDevoirsEffectues: Array<number| null>;
    idDevoirsNonEffectues: Array<number| null>;
}

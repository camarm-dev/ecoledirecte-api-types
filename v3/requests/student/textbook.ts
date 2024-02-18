import {body} from "../default/body";

export interface textbookRequestData extends body  {

}

export interface textbookSetDoneStatusRequestData extends body  {
    idDevoirsEffectues: Array<number| null>;
    idDevoirsNonEffectues: Array<number| null>;
}

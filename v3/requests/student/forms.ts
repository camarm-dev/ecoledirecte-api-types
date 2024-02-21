import {body} from "../default/body";

export interface formsRequestData extends body  {
    anneeForms: string;
    typeEntity: string
    idEntity: number;
}

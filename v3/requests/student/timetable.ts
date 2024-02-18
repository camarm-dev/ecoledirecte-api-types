import {body} from "../default/body";

export interface timetableRequestData extends body  {
    dateDebut: string;
    dateFin: string;
    avecTrous: boolean;
}

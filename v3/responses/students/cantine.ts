import {failureRes} from "../failure";

export type schoolMenuRes = schoolMenuResSuccess | failureRes;

export type schoolMenuResSuccess = {
    data: Array<schoolMenu>;
}

export type schoolMenu = {
    semaine: number;
    doc: {
        libelle: string;
        id: number;
    };
}

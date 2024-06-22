// Thanks to https://github.com/EduWireApps/ecoledirecte-api-docs/blob/main/README.md#vie-scolaire

import { failureRes } from "../failure";

export type schoolLifeRes = schoolLifeResSuccess | failureRes;
export type schoolLifeResSuccess = {
    code: 200;
    token: string;
    host: string;
    data: schoolLifeResData;
};

export type schoolLifeItem = {
    id: number;
    idEleve: number;
    nomEleve: string;
    typeElement: "Punition" | "Retard" | "Absence" | string;
    date: string;
    displayDate: string;
    libelle: "RETENUE" | string;
    motif: string;
    justifie: boolean;
    par: string;
    commentaire: string;
    typeJustification: string;
    justifieEd: boolean;
    aFaire: string;
    dateDeroulement: string;
    interval?: { start: string; end: string };
};

export type schoolLifeResData = {
    sanctionsEncouragements: Array<schoolLifeItem>;
    absencesRetards: Array<schoolLifeItem>;
    parametrage: {
        justificationEnLigne: boolean;
        absenceCommentaire: boolean;
        retardCommentaire: boolean;
        sanctionsVisible: boolean;
        sanctionParQui: boolean;
        sanctionCommentaire: boolean;
        encouragementsVisible: boolean;
        encouragementParQui: boolean;
        encouragementCommentaire: boolean;
    };
};
//# sourceMappingURL=schoolLife.d.ts.map

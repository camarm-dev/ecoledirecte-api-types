import {body} from "../default/body";

export interface workspaceRequestData extends body  {

}

export interface joinWorkspaceRequestData extends body  {
    id: number;
    titre: string;
    description: string;
    resume: string;
    cloud: true;
    discussion: boolean;
    agenda: boolean;
    public: boolean;
    ouvert: boolean;
    estMembre: boolean;
    estAdmin: false;
    salleDesProfs: false;
    creePar: string;
    droitUtilisateur: 0 | 1 | 2 | number;
    nbMembres: number;
    couleurEvenementAgenda: string;
    cloudLibelle: string;
    fullLoaded: false;
}

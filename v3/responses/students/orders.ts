import {failureRes} from "../failure";

export type schoolMenuRes = schoolMenuResSuccess | failureRes;

export type schoolMenuResSuccess = {
    data: schoolMenuResData;
}

export type schoolMenuResData = {

}

export type startOrderRes = startOrderResSuccess | failureRes;

export type startOrderResSuccess = {
    data: startOrderResData;
}

export type startOrderResData = {
    creneauMinRetrait: string;
    soldePM: number;
    codePM: string;
    libellePM: string;
    montantDecouvert: number;
    montantSemaineAtteint: boolean;
    montantJournalierAtteint: boolean;
    nbPassageSemaineAtteint: boolean;
    montantSemaine: number;
    montantJournalier: number;
    montantActuelSemaineUser: number;
    nbPassageSemaine: number;
    /**
     * Une liste de libelles d'articles
     * @example ["Beignet", "Pepsi"]
     * */
    articlesSansStock: Array<string>;
    articlesAvecStock: Array<article>;
    creneaux: Array<{
        estComplet: boolean;
        libelle: string;
    }>
}

export type article = {
    id: number;
    code: string;
    type: string;
    montant: number;
    idCateg: number;
}

export type ordersRes = ordersResSuccess | failureRes;

export type ordersResSuccess = {
    data: ordersResData
}

export type ordersResData = {
    historiqueCommandes: Array<unknown>;
    tabPointsDePassage: Array<orderTabPDP>;
    /**
     * YYYY-MM-DD day list
     * @example ["2024-01-01", "2024-05-25"]
     * */
    joursFeries: Array<string>;
}

export type pastOrder = {
    idCommande: number;
    /**
     * @example "010203-15"
     */
    numeroCommande: string;
    /**
     * @example "12:00 - 13:45"
     */
    creneau: string;
    date: string;
    etat: string;
    estHorsDelai: boolean;
    idUser: number;
    /**
     * @example "ELEVE"
     */
    typeUser: string;
    articles: Array<detailedArticle>;
}


/**
 * Tab Point de passage
 */
export type orderTabPDP = {
    id: number;
    libelle: string;
    plafond: number;
    nbHeureLimiteAvantCommande: number;
    decouvertActif: boolean;
    panierMinimum: number;
    categoriesArticles: Array<articleCategory>;
    creneaux: []
}

export type articleCategory = {
    id: number;
    libelle: string;
    ordre: number;
    articles: Array<detailedArticle>;
}

export type detailedArticle = {
    code: string;
    libelle: string;
    description: string;
    estFormule: boolean
    etat: number;
    img: string;
    montant: number;
    quantite: number;
    quantiteMax: number;
    estObligatoire: boolean;
    ordre: number;
    /**
     * Possibilités de la formule (présent si `estFormule` est `true`)
     * Chaque objet est un article. Cela doit permettre former un menu déroulant pour choisir les articles de sa formule (plusieurs champs (menus déroulants) qui possèdent plusieurs articles parmi lesquels il faut choisir (les articles d'un même champ on le même `choix.id`)).
     */
    possibilites?: Array<{
        code: string;
        libelle: string;
        quantite: number;
        etat: number;
        idCateg: number;
        libelleCateg: string;
        ordre: number;
        img: string;
        choix: {
            libelle: string;
            id: number;
            ordre: number;
        }
    }>
}

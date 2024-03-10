import {body} from "../default/body";
import {detailedArticle} from "../../responses";

export interface orderRequestData extends body {
    articles: Array<detailedArticle>;
    /**
     * @example "12:00"
     */
    creneau: string;
    /**
     * @example "AAAA-MM-JJ"
     */
    date: string;
    /**
     * @abstract ID du "Point de passage"
     */
    pointDePassage: number;
};

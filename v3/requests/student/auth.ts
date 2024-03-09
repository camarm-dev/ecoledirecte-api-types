import {body} from "../default/body";
import {role} from "../../responses";

export interface authRequestData extends body  {
    identifiant: string;
    motdepasse: string;
    uuid: string;
    isRelogin?: boolean;
    sesouvenirdemoi?: boolean;
    typeCompte?: role;
    accesstoken?: string;
}

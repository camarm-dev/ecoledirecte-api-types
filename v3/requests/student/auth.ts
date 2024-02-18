import {body} from "../default/body";

export interface authRequestData extends body  {
    identifiant: string
    motdepasse: string
    isRelogin: boolean
    uuid: string
}

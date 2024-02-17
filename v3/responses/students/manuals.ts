import { failureRes } from "../failure";

export type manualsRes = manualsResSuccess | failureRes;

export type manualsResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: Array<digitalManual>;
};

// Thanks to https://github.com/EduWireApps/ecoledirecte-api-docs/blob/main/README.md#manuels-num%C3%A9riques

export type digitalManual = {
	libelle: string;
	url: string;
	urlCouverture: string;
	urlTelechargement: "";
	editeur: string;
	idRessource: string;
	affecte: true;
	ogec: string;
	eleves: [];
	disciplines: Array<string>;
};

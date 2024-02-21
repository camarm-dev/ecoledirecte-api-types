// Thanks to https://github.com/EduWireApps/ecoledirecte-api-docs/blob/main/README.md#manuels-num%C3%A9riques

import { failureRes } from "../failure";

export type formsRes = formsResSuccess | failureRes;

export type formsResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: Array<form>;
};

export type form = {
	questions: Array<{
		id: number;
		question: string;
		enonce: string;
		typeQ: formInputType;
		ordre: number;
		required: boolean;
		minChecks: number;
		maxChecks: number;
		propositions: Array<{
			id: number;
			enonce: string;
			choisie: number;
		}>;
	}>;
	reponses: [];
	formulaire: {
		id: number;
		typeF: string;
		titre: string;
		introduction: string;
		conclusion: string;
		signature: boolean;
		created: string;
	};
	participant: {
		id: number;
		fini: string;
	}
};

export type formInputType = "radio" | "textarea" | "checkbox"

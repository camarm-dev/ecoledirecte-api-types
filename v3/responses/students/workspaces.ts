// Thanks to https://github.com/EduWireApps/ecoledirecte-api-docs/blob/main/README.md#manuels-num%C3%A9riques

import { failureRes } from "../failure";

export type workspacesRes = workspacesResSuccess | failureRes;

export type workspaceRes = workspaceResSuccess | failureRes;

export type workspacesResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: Array<workspace>;
};

export type workspaceResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: workspace;
};

export type workspace = {
	id: number;
	titre: string;
	description: string;
	resume: string;
	cloud: true;
	discussion: boolean;
	agenda: boolean;
	public: boolean;
	ouvert: boolean;
	type: "LIBRE" | string;
	estMembre: boolean;
	estAdmin: false;
	salleDesProfs: false;
	creePar: string;
	droitUtilisateur: 0 | 1 | 2 | number;
	nbMembres: number;
	couleurEvenementAgenda: string;
	creeLe?: string;
};

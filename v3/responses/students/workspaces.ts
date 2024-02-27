// Thanks to https://github.com/EduWireApps/ecoledirecte-api-docs/blob/main/README.md

import { failureRes } from "../failure";
import {role} from "../login/accounts";

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

export type workspaceDiaryRes = diaryResSuccess | failureRes

export type diaryResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: diaryResData;
};

export type diaryResData = {
	evenements: unknown;
};

export type workspaceTopicsRes = topicsResSuccess | failureRes

export type topicsResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: topicsResData;
};

export type topicsResData = {
	nomEspaceTravail: string;
	topics: Array<string>; // Array
	parametrage:{
		droitUtilisateur: 0 | 1 | 2 | number;
	}
};


export type workspaceMembersRes = membersResSuccess | failureRes

export type membersResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: membersResData;
};

export type membersResData = {
	idEspaceTravail: number;
	titreEspaceTravail: string;
	creePar: string;
	droitUtilisateur:  0 | 1 | 2 | number;
	nbMembresTotal: number;
	membres: Array<member>;
};

export type member = {
	idMembre: number;
	nom: string;
	prenom: string;
	profil: role;
	civilite: string;
	libelleClasse: string;
	droit: 0 | 1 | 2 | number;
	isAdministrateur: boolean;
	messagerieActive: boolean;
	fonction: {
		id: number;
		libelle: string;
	}
};

import { failureRes } from "..";


export type communicationBookRes = communicationBookResSuccess | failureRes;

export type communicationBookResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: communicationBookResData;
};

export type communicationBookResData = {
	correspondances: Array<unknown>;
	suivis: Array<unknown>
};

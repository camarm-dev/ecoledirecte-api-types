import { failureRes } from "../failure";

export type schoolLifeRes = schoolLifeResSuccess | failureRes;

export type schoolLifeResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: schoolLifeResData;
};

export type schoolLifeResData = {
	// TODO
};


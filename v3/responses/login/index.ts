import { failureRes } from "..";
import { account } from "./accounts";

export * from "./accounts";

export type loginRes = loginResSuccess | failureRes;

export type loginResSuccess = {
	code: 200;
	token: string;
	message: "";
	data: loginResData
};

export type loginResData = {
	accounts: Array<account>;
};

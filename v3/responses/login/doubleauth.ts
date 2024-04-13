import {failureRes} from "../failure";

export type doubleauthRes = doubleauthResSuccess | failureRes;

export type doubleauthResSuccess = {
    code: 200;
    token: string;
    message: "";
    data: doubleauthResData;
};

export type doubleauthResData = {
    question: string;
    propositions: Array<string>;
};

export type doubleauthValidationRes = doubleauthValidationResSuccess | failureRes;

export type doubleauthValidationResSuccess = {
    code: 200;
    token: string;
    message: "";
    data: doubleauthValidationResData;
};

export type doubleauthValidationResData = {
    cn: string;
    cv: string;
};

// Thanks to https://github.com/EduWireApps/ecoledirecte-api-docs/blob/main/README.md#manuels-num%C3%A9riques

import { failureRes } from "../failure";

export type messagesRes = messagesResSuccess | failureRes;

export type messagesResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: messageList;
};

export type messageList = {
	classeur: [];
	messages: message[];
	parametrage: [];
	pagination: [];
};


export type messageContentRes = messageContentResSuccess | failureRes;

export type messageContentResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: Array<messageContent>;
};

// TODO: no informations about this...
export type message = {
	[key: string]: unknown
}


// TODO: no informations about this...
export type messageContent = {
	[key: string]: unknown
}

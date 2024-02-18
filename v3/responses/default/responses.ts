import {loginRes} from "../login/index";
import {cloudRes, cloudResFile, cloudResFolder} from "../global/cloud";
import {mailboxRes, mailboxResMessage} from "../global/mailbox";
import {timetableRes} from "../global/timetable";
import {
    gradesRes,
    manualsRes,
    schoolLifeRes,
    studCommonTlRes,
    studentDocsRes,
    studTlRes,
    textbookRes,
    walletsRes
} from "../students";
import {schoolsRes, studentsRes} from "../teachers";

export type response = loginRes & cloudRes & cloudResFile & cloudResFolder & mailboxRes & mailboxResMessage &
    timetableRes & studentDocsRes & gradesRes & manualsRes & schoolLifeRes & textbookRes & studTlRes & walletsRes &
    schoolsRes & studCommonTlRes & studentsRes

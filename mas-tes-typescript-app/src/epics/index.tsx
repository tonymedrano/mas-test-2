import { combineEpics } from "redux-observable";

import fetch from "./fetch";

export const epics: any = combineEpics(fetch);

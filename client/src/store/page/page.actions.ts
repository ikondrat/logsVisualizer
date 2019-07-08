import { createAction } from "typesafe-actions";
import { PageAction } from "./page.types";

export const setPending = createAction(PageAction.SET_PENDING);
export const unsetPending = createAction(PageAction.UNSET_PENDING);

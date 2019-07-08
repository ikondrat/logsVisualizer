import { produce } from "immer";
import { Reducer } from "redux";
import { LogEntry } from "../../../../shared/Models/LogEntry";
import { StoreArray } from "../store";
import { LogAction } from "./log.types";
import { ActionType } from "typesafe-actions";
import * as logActions from "./logs.actions";

export type LogsAction = ActionType<typeof logActions>;
export type LogsState = StoreArray<LogEntry>;

const initialState: LogsState = {
  payload: null,
  isFetching: false
};

export const reducerLogs: Reducer<LogsState> = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LogAction.FETCH_LOGS_REQUEST:
        draft.isFetching = true;
        break;
      case LogAction.FETCH_LOGS_SUCCESS:
        draft.isFetching = false;
        draft.payload = action.payload;
        break;
      case LogAction.FETCH_LOGS_FAILURE:
        draft.isFetching = false;
        break;
    }
  });

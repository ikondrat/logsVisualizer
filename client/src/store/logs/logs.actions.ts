import { createAsyncAction } from "typesafe-actions";
import { LogAction } from "./log.types";
import { LogEntry } from "../../../../shared/Models/LogEntry";

export const fetchLogs = createAsyncAction(
  LogAction.FETCH_LOGS_REQUEST,
  LogAction.FETCH_LOGS_SUCCESS,
  LogAction.FETCH_LOGS_FAILURE
)<undefined, LogEntry[], Error>();

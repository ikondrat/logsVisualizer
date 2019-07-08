import { combineReducers } from "redux";
import { AppState } from "./store";
import { reducerLogs } from "./logs";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { reducerPage } from "./page";

export const getReducers = (history: History) =>
  combineReducers<AppState>({
    logs: reducerLogs,
    page: reducerPage,
    router: connectRouter(history)
  });

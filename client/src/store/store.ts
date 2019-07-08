import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import { LogsState } from "./logs";
import { getReducers } from "./reducers";
import { rootSaga } from "./sagas";
import { PageState } from "./page";

const composeEnhancers =
  process.env.NODE_ENV === "production" ? compose : composeWithDevTools({});

export interface AppState {
  logs: LogsState;
  page: PageState;
  router?: any;
}

export interface StoreArray<T> {
  isFetching: boolean;
  payload: T[] | null;
}

export default function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    getReducers(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store as Store<AppState>;
}

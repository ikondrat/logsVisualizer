import { call, put, takeEvery } from "redux-saga/effects";
import { logsApi } from "../../api/logs";
import { fetchLogs } from "./logs.actions";
import { LogAction } from "./log.types";
import { setPending, unsetPending } from "store/page";

function* fetchLogsSaga(
  action: ReturnType<typeof fetchLogs.request>
): Generator {
  yield put(setPending());
  const { response, error } = yield call(logsApi.getAll);
  if (!error) {
    yield put(fetchLogs.success(response));
    yield put(unsetPending());
  } else {
    yield put(fetchLogs.failure(error));
    yield put(unsetPending());
  }
}

export function* sagaLogs() {
  yield takeEvery(LogAction.FETCH_LOGS_REQUEST, fetchLogsSaga);
}

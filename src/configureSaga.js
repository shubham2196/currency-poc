import { fork, all } from "redux-saga/effects";
import featuresSaga from "./features/featuresSaga";
import _ from "lodash";
const sagas = _.flattenDeep([featuresSaga]);
export default function* sagaRunner() {
  yield all(sagas.map(saga => fork(saga)));
}

import { call, put, select, takeEvery } from "redux-saga/effects";
import apiRoutes from "../../common/constants/apiRoutes";
import {
  fetchCurrentPriceAction,
  fetchCurrentPriceChartAction,
  fetchCurrentPriceChartSuccessAction,
  fetchCurrentPriceSuccessAction,
} from "./homeAction";
import { getSelectedCountry } from "./homeSelector";
const currencyWatcher = function* saveScoreSaga() {
  yield takeEvery(fetchCurrentPriceAction, fetchCurrencies);
};

function* fetchCurrencies(action) {
  let data;
  try {
    data = yield call(fetch, apiRoutes.CURRENCYPRICE, {
      method: "get",
    });
    let response = yield data.json();
    yield put(fetchCurrentPriceSuccessAction({ response }));
  } catch (err) {
    console.log("err", err);
  }
}

const currencyChartWatcher = function* saveScoreSaga() {
  yield takeEvery(fetchCurrentPriceChartAction, fetchCurrencyChart);
};

function* fetchCurrencyChart(action) {
  let data;
  try {
    let currency = yield select(getSelectedCountry);
    data = yield call(
      fetch,
      apiRoutes.CURRENCYCHART.replace("$cur$", currency),
      {
        method: "get",
      }
    );
    let chartData = yield data.json();
    yield put(fetchCurrentPriceChartSuccessAction({ chartData }));
  } catch (err) {
    console.log("err", err);
  }
}

export default [currencyWatcher, currencyChartWatcher];

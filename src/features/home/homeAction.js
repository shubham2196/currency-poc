import { createAction } from "redux-actions";

const fetchCurrentPriceType = "CURRENT_PRICE";
export const fetchCurrentPriceAction = createAction(fetchCurrentPriceType);
const fetchCurrentPriceSuccessType = "CURRENT_PRICE_SUCCESS";
export const fetchCurrentPriceSuccessAction = createAction(fetchCurrentPriceSuccessType);

const selectedCountryType = "SELECTED_COUNTRY";
export const setSelectedCountryAction = createAction(selectedCountryType);


const fetchCurrentPricCharteType = "CURRENT_PRICE_CHART";
export const fetchCurrentPriceChartAction = createAction(fetchCurrentPricCharteType);
const fetchCurrentPriceChartSuccessType = "CURRENT_PRICE_CHART_SUCCESS";
export const fetchCurrentPriceChartSuccessAction = createAction(fetchCurrentPriceChartSuccessType);
import { fetchCurrentPriceChartSuccessAction, fetchCurrentPriceSuccessAction,setSelectedCountryAction } from "./homeAction";
import { handleActions } from "redux-actions";
export const initialState = {
  countries: [
    {
      label:"United States Dollar",
      value:"USD"
    },
    {
      label:"British PoundSterling",
      value:"GBP"
    },
    {
      label:"Euro",
      value:"EUR"
    },
  ],
  chartData:null,
  selectedCountry:null,
  currencies:null
};
export const getCountries = (state) => state.countries;
export const getCurrencies = (state) => state.currencies;
export const getSelectedCountry = (state) => state.selectedCountry;
export const getChartData = (state) => state.chartData;

export default handleActions(
  {
    [String(fetchCurrentPriceSuccessAction)]: (state, action) => {
      const { response } = action.payload;
      return {
        ...state,
        currencies: response,
      };
    },
    [String(setSelectedCountryAction)]: (state, action) => {
      const { currency } = action.payload;
      return {
        ...state,
        selectedCountry: currency,
      };
    },
    [String(fetchCurrentPriceChartSuccessAction)]: (state, action) => {
      const { chartData } = action.payload;
      return {
        ...state,
        chartData: chartData,
      };
    },
  },
  initialState
);

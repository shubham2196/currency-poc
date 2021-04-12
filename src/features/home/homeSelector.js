import * as local from "./homeReducer";
import globalize from "../../common/utils/globlize";
import { createSelector } from "reselect";
export const path = "features.login";

export const getCountries = globalize(local.getCountries, path);
export const getCurrencies = globalize(local.getCurrencies, path);

export const getSelectedCountry = globalize(local.getSelectedCountry, path);
export const getChartData = globalize(local.getChartData, path);

export const getSelectedCountryPrice = createSelector(
  getCurrencies,
  getSelectedCountry,
  (getCurrencies, getSelectedCountry) => {
    return getCurrencies&&getCurrencies.bpi[getSelectedCountry];
  }
);

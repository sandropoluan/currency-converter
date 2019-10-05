import axios from "axios";
import {supportedCurrency} from "../../../utils";
import * as types from "./types";

export const getAllExchanger = currency => dispatch => {
  dispatch({
    type: types.FETCH_EXCHANGER
  });

  axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`, {
    responseType: 'json'
  }).then(response => {
    const {status, data} = response || {};
    if (status === 200) {
      const {rates} = data;
      const supported = Object.keys(supportedCurrency);

      const supportedRates = {};
      Object.keys(rates).forEach(item => {
        if (supported.indexOf(item) > -1) {
          supportedRates[item] = rates[item];
        }
      });

      dispatch({
        type: types.FETCH_EXCHANGER_SUCCESS,
        payload: supportedRates
      });

    } else {
      dispatch({
        type: types.FETCH_EXCHANGER_ERROR,
        payload: `Please try again. Error code: ${status}`
      });
    }
  }).catch(error => {
    dispatch({
      type: types.FETCH_EXCHANGER_ERROR,
      payload: `${error}`,
    });
  });
};

export const setAmount = amount => {
  return {
    type: types.SET_AMOUNT,
    payload: amount
  }
};


export const addSelectedCurrency = currency => {
  return {
    type: types.ADD_SELECTED_CURRENCY,
    payload: currency
  }
};


export const removeSelectedCurrency = currency => {
  return {
    type: types.REMOVE_SELECTED_CURRENCY,
    payload: currency
  }
};

import * as types from "./types";
import {cloneDeep} from "lodash";

const initialState = {
  loading: true,
  currency: 'USD',
  amount: 10,
  error: '',
  listCurrency: {},
  selectedCurrencies: [],
};

const ACTION_HANDLERS = {
  [types.FETCH_EXCHANGER]: (state) => {
    return {
      ...state,
      error: '',
      loading: true
    }
  },
  [types.FETCH_EXCHANGER_ERROR]: (state, action) => {
    const {payload} = action;
    return {
      ...state,
      loading: false,
      error: payload,
    }
  },
  [types.FETCH_EXCHANGER_SUCCESS]: (state, action) => {
    const {payload} = action;
    return {
      ...state,
      error: '',
      listCurrency: payload,
      loading: false
    }
  },
  [types.SET_AMOUNT]: (state, action) => {
    const {payload} = action;
    return {
      ...state,
      amount: payload,
    }
  },
  [types.ADD_SELECTED_CURRENCY]: (state, action) => {
    const selectedCurrencies = cloneDeep(state.selectedCurrencies);
    const {payload} = action;
    selectedCurrencies.push(payload);
    return {
      ...state,
      selectedCurrencies
    }
  },
  [types.REMOVE_SELECTED_CURRENCY]: (state, action) => {
    const selectedCurrencies = cloneDeep(state.selectedCurrencies);
    const {payload} = action;

    const index = selectedCurrencies.indexOf(payload);
    if (index === -1) return state;

    selectedCurrencies.splice(index, 1);
    return {
      ...state,
      selectedCurrencies
    }
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

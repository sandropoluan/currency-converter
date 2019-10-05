import React from "react";
import {Provider} from "react-redux";
import configureStore from "../redux/configureStore";


export const supportedCurrency = {
  'USD': 'United State Dollar',
  'CAD': 'Canadian Dollar',
  'IDR': 'Indonesian rupiah',
  'GBP': 'British Pound',
  'CHF': 'Swiss Franc',
  'SGD': 'Singapore Dollar',
  'INR': 'Indian Rupee',
  'MYR': 'Malaysian Ringgit',
  'JPY': 'Japanese Yen',
  'KRW': 'South Korean Won'
};

export const store = configureStore();

export const withReduxProvider = RenderedComponent => props => <Provider
  store={store}><RenderedComponent {...props}/></Provider>;

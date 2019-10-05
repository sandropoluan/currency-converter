import React from "react";
import {connect} from "react-redux";
import numeral from "numeral";
import {removeSelectedCurrency} from "../../redux/actions";
import {supportedCurrency} from "../../utils";
import "./styles.scss";

function ListCurrency(props) {

  const {currency, defaultCurrency, amount, listCurrency, removeSelectedCurrency} = props;

  const removeCurrency = () => {
    removeSelectedCurrency(currency);
  };

  return <div className="list-currency">
    <div>
      <div className="total-area">
        <span>
          {currency}
        </span>
        <span>
          {numeral(amount * listCurrency[currency]).format('0,0.00')}
        </span>
      </div>
      <div className="label">
        <i>{currency} - {supportedCurrency[currency]}</i>
      </div>
      <div className="curs">
        1 {defaultCurrency} = {currency} {numeral(listCurrency[currency]).format('0,0.00')}
      </div>
    </div>
    <div onClick={removeCurrency}>
      <i className="min-icon fa fa-minus-circle"/>
    </div>
  </div>
}

export default connect(({app: {amount, currency: defaultCurrency, listCurrency}}) => ({
  amount,
  listCurrency,
  defaultCurrency
}), {removeSelectedCurrency})(ListCurrency);

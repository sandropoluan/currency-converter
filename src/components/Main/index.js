import React, {useEffect} from "react";
import {connect} from "react-redux";
import ListCurrency from "../ListCurrency";
import CurrencyPicker from "../CurrencyPicker";
import {getAllExchanger, setAmount} from "../../redux/actions";
import "./styles.scss";

function Main(props) {
  const {selectedCurrencies, currency, amount, getAllExchanger, setAmount,loading} = props;

  const onAmountChange = e => {
    const {value} = e.target;
    setAmount(value >= 0 ? value : 0);
  };

  useEffect(() => {
    getAllExchanger(currency);
  }, []);

  if(loading) return <div className="loading-box">Loading...</div>;

  return <div className="main-app">
    <div className="header-box">
      <span>USD - United State Dollar</span>
      <div className="currency-area">
        <div>{currency}</div>
        <div><input className="form-control" value={amount} type="number" onChange={onAmountChange}/></div>
      </div>
    </div>

    <div className="body-box">
      {selectedCurrencies.map(item => <ListCurrency key={item} amount={amount} currency={item}/>)}
    </div>

    <div className="footer-box">
      <CurrencyPicker/>
    </div>
  </div>
}

export default connect(({app: {listCurrency, currency, amount, selectedCurrencies,loading}}) => ({
  listCurrency,
  currency,
  amount,
  selectedCurrencies,
  loading
}), {
  getAllExchanger, setAmount
})(Main);

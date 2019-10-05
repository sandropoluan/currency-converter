import React, {useState} from "react";
import {connect} from "react-redux";
import {addSelectedCurrency} from "../../redux/actions";
import "./styles.scss";

function CurrencyPicker(props) {
  const {listCurrency, addSelectedCurrency, selectedCurrencies} = props;

  const [editMode, setEditMode] = useState(false);
  const [selectedCurrency, changeCurrency] = useState('');

  const changeSelectedCurrency = e => {
    const {value} = e.target;

    if (!value) return;

    changeCurrency(value);
  };

  const submit = () => {
    if (!selectedCurrency) return;

    addSelectedCurrency(selectedCurrency);
    changeCurrency("");
    setEditMode(!editMode);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const availableOption = Object.keys(listCurrency).filter(item => selectedCurrencies.indexOf(item) === -1);

  return <div className="currency-picker">
    {!editMode && <div className="add-currency-picker" onClick={toggleEditMode}>+ Add more currencies</div>}
    {editMode && <div className="editor-picker">
      <select value={selectedCurrency} onChange={changeSelectedCurrency}>
        <option value="">--Please select--</option>
        {availableOption.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
      <button className="btn btn-primary" onClick={submit}>Submit</button>
    </div>}
  </div>
}

export default connect(({app: {listCurrency, selectedCurrencies}}) => ({
  listCurrency,
  selectedCurrencies
}), {addSelectedCurrency})(CurrencyPicker);



import React from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import {withReduxProvider} from "../../../utils";
import CurrencyPicker from "../index.js";

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe(`Test CurrencyPicker`, () => {

  const TestComponent = withReduxProvider(CurrencyPicker);

  it('initial renders correctly', () => {
    const tree = renderer
      .create(<TestComponent/>);
    expect(tree).toMatchSnapshot();
  });


  it('initial renders correctly after button click', () => {

    const tree = renderer.create(<TestComponent/>);

    act(() => {
      ReactDOM.render(<TestComponent/>, container);
    });

    const button = container.querySelector('div.add-currency-picker');

    Simulate.click(button);

    expect(tree).toMatchSnapshot();

  });

});

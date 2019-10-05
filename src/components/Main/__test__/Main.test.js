import React from "react";
import renderer from 'react-test-renderer';
import {withReduxProvider} from "../../../utils";
import Main from "../index.js";

it('renders correctly', () => {
  const props = {};


  const TestComponent = withReduxProvider(Main);

  const tree = renderer
    .create(<TestComponent {...props}/>);
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Application from './index';

describe('Application', () => {
  it('render application without crashing', () => {
    const app = shallow(<Application />);

    expect(app.contains(<h1>Application</h1>)).toEqual(true);
  });
});

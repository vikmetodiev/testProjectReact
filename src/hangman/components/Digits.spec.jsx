import React from 'react';

import toJson from 'enzyme-to-json';
import Digits from './Digits';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('Digits', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Digits guesses="abc" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

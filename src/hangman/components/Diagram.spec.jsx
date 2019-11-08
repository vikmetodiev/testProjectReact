import React from 'react';

import toJson from 'enzyme-to-json';
import Diagram from './Diagram';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('Diagram', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Diagram />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

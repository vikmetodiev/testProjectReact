import React from 'react';

import toJson from 'enzyme-to-json';
import Title from './Title';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('Title', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Title 
      content='yay'
      guesses='abc'
      missedLetters='y'
      />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

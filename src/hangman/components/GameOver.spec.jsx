import React from 'react';

import toJson from 'enzyme-to-json';
import GameOver from './GameOver';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('Game Over', () => {
  const text = 'Snap!';

  it('should render the component', () => {
    const wrapper = shallow(<GameOver text={text} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';

import toJson from 'enzyme-to-json';
import NewGame from './NewGame';


import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('New Game', () => {
  const item = 'Another one?';

  it('should render the component', () => {
    const wrapper = shallow(
      <NewGame>
        {item}
      </NewGame>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import BackgroundImage from '../../components/BackgroundImage';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('BackgroundImage Component', () => {
  const wrapper = shallow(<BackgroundImage />);

  it('expect to render BackgroundImage component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

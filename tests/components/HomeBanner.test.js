import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import HomeBanner from '../../components/HomeBanner';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('HomeBanner Component', () => {
  const wrapper = shallow(<HomeBanner />);

  it('expect to render HomeBanner component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

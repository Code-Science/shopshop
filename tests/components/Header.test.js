import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Header from '../../components/Header';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  const wrapper = shallow(<Header />);

  it('expect to render Header component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

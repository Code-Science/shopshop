import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Footer from '../../components/Footer';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  const wrapper = shallow(<Footer />);

  it('expect to render Footer component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

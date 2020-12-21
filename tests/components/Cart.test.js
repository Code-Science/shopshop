import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Cart from '../../components/Cart';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('Cart Component', () => {
  const wrapper = shallow(<Cart show={true} />);

  it('expect to render Cart component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

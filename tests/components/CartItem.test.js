import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CartItem from '../../components/CartItem';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('CartItem Component', () => {
  const mockItem = {
    id: 4,
    title: 'shirt',
    price: 80,
    image: 'image1',
    quantity: 1,
  };
  const wrapper = shallow(<CartItem item={mockItem} />);

  it('expect to render CartItem component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

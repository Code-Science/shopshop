import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import OrderSummary from '../../components/OrderSummary';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('Order Summary Component', () => {
  const wrapper = shallow(<OrderSummary />);

  it('expect to render OrderSummary component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CheckoutPage from '../../../pages/checkout/index';

configure({ adapter: new Adapter() });

describe('CheckoutPage Component', () => {
  const wrapper = shallow(<CheckoutPage />);

  it('expect to render CheckoutPage component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

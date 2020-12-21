import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CheckoutForm from '../../components/CheckoutForm';

jest.mock('../../store/StateProvider');
jest.mock('@stripe/react-stripe-js');

configure({ adapter: new Adapter() });

describe('CheckoutForm Component', () => {
  const wrapper = shallow(<CheckoutForm />);

  it('expect to render CheckoutForm component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Products from '../../components/Products';

configure({ adapter: new Adapter() });

describe('Products Component', () => {
  const mockItems = [
    {
      id: 4,
      product_name: 'shirt',
      price: 80,
      image1: 'image1',
      image2: 'image2',
    },
  ];
  const wrapper = shallow(<Products data={mockItems} />);

  it('expect to render products component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Show error message if no items as props', () => {
    const mockErrorMessage = {
      error: 'error',
    };
    expect(shallow(<Products data={mockErrorMessage} />).text()).toEqual(
      'Something Went Wrong! Server is Down'
    );
  });
});

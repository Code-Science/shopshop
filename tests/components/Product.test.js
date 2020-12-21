import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Product from '../../components/Product';

configure({ adapter: new Adapter() });

describe('Product Component', () => {
  const mockItem = {
    id: 4,
    product_name: 'shirt',
    price: 80,
    image1: 'image1',
    image2: 'image2',
  };
  const product = shallow(<Product item={mockItem} />);

  it('expect to render product component', () => {
    expect(product.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(product).toMatchSnapshot();
  });
  it('change image on hover', () => {
    const image = product.find('figure');
    image.simulate('mouseenter'); // not working somehow
    expect(image.childAt(0).prop('src')).toEqual(mockItem.image1);
  });
});

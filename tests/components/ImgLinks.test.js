import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ImgLinks from '../../components/ImgLinks';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('ImgLinks Component', () => {
  const wrapper = shallow(<ImgLinks />);

  it('expect to render ImgLinks component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

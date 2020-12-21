import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Backdrop from '../../components/Backdrop';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('Backdrop Component', () => {
  const wrapper = shallow(<Backdrop show={true} />);

  it('expect to render Backdrop component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

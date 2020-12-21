import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Nav from '../../components/Nav';

jest.mock('../../store/StateProvider');

configure({ adapter: new Adapter() });

describe('Nav Component', () => {
  const wrapper = shallow(<Nav open={true} />);

  it('expect to render visible (desktop) Nav component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render hidden (mobile) Nav component', () => {
    expect(shallow(<Nav open={false} />).length).toEqual(1);
  });
});

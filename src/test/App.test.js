import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Navigation from './../pages/Navigation'

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

describe('<App/>', () => {
  it('should have one div on <App/>', () => {
    const wrapper = setup()
    expect(wrapper.find('div').length).toBe(2)
  })
  it('should have one child component on <App/>', () => {
    const wrapper = setup()
    expect(wrapper.find(Navigation).length).toBe(1)
  })
})
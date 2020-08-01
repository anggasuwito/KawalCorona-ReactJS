import React from 'react'
import { shallow } from 'enzyme'
import GlobalCoronaContainer from './../pages/Corona/Global/GlobalCoronaContainer'
import ListGlobalCorona from './../pages/Corona/Global/ListGlobalCorona'

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<GlobalCoronaContainer {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

describe('<GlobalCoronaContainer/>',()=>{
    it('should have one div on <GlobalCoronaContainer/>',()=>{
        const wrapper = setup()
        expect(wrapper.find('div').length).toBe(1)
    })
    it('should have one child component on <GlobalCoronaContainer/>', () => {
        const wrapper = setup()
        expect(wrapper.find(ListGlobalCorona).length).toBe(1)
      })
})
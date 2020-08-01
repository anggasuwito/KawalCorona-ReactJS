import React from 'react'
import { shallow } from 'enzyme'
import IndonesiaCoronaContainer from './../pages/Corona/Indonesia/IndonesiaCoronaContainer'
import ListIndonesiaProvinsiCorona from './../pages/Corona/Indonesia/ListIndonesiaProvinsiCorona'
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<IndonesiaCoronaContainer {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

describe('<IndonesiaCoronaContainer/>',()=>{
    it('should have one div on <IndonesiaCoronaContainer/>',()=>{
        const wrapper = setup()
        expect(wrapper.find('div').length).toBe(1)
    })
    it('should have one child component on <IndonesiaCoronaContainer/>', () => {
        const wrapper = setup()
        expect(wrapper.find(ListIndonesiaProvinsiCorona).length).toBe(1)
      })
})
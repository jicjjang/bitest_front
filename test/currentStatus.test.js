import { mount } from '@vue/test-utils'
import currentStatus from '../src/components/currentStatus'

/* eslint-disable no-new */
describe('currentStatus.test.js', () => {
  const wrapper1 = mount(currentStatus, {
    propsData: {
      price: 500,
      count: 100,
      remainTradeCount: 20
    }
  })

  it('currentStatus received price, count', () => {
    expect(wrapper1.vm.$el.textContent.split(' ').join('')).toBe('대기중인거래내역:20개최근거래신청내역:500원,100개')
  })

  let wrapper2 = mount(currentStatus)

  it('currentStatus have not received price, count', () => {
    expect(wrapper2.vm.$el.textContent.split(' ').join('')).toBe('최근거래신청내역:없음')
  })
})

import { mount } from '@vue/test-utils'
import priceItem from '../src/components/priceItem'

/* eslint-disable no-new */
describe('priceItem.test.js', () => {
  const wrapper = mount(priceItem, {
    propsData: {
      item: {
        price: 500,
        count: 120
      },
      type: 'buy',
      currentPrice: 500
    }
  })

  it('price item', () => {
    expect(wrapper.vm.$el.textContent.split(' ').join('')).toBe('500120')
  })
})

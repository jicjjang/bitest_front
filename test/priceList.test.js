import { mount } from '@vue/test-utils'
import priceList from '../src/components/priceList'

/* eslint-disable no-new */
describe('priceList.test.js', () => {
  const wrapper = mount(priceList, {
    propsData: {
      buyList: [
        { price: 500, count: 100 },
        { price: 400, count: 100 },
        { price: 300, count: 100 },
        { price: 200, count: 100 },
        { price: 100, count: 100 }
      ],
      sellList: [
        { price: 510, count: 100 },
        { price: 600, count: 100 },
        { price: 700, count: 100 },
        { price: 800, count: 100 },
        { price: 900, count: 100 }
      ],
      currentPrice: 0
    }
  })

  it('price List', () => {
    expect(wrapper.vm.$el.textContent.split(' ').join(''))
      .toBe('매도수량매도가격매수가격매수수량100900100800100700100600100510500100400100300100200100100100')
  })
})

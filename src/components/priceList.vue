<template>
  <article class="price">
    <table class="priceList">
      <tr>
        <th>매도수량</th>
        <th>매도가격</th>
        <th>매수가격</th>
        <th>매수수량</th>
      </tr>
      <slot v-for="(item, key) in this.reverseSlicedSellList">
        <app-price-item :key="`sell_item_${key}`" :type="`sell`" :item="item" :currentPrice="currentPrice"/>
      </slot>
      <slot v-for="(item, key) in this.slicedBuyList">
        <app-price-item :key="`buy_item_${key}`" :type="`buy`" :item="item" :currentPrice="currentPrice"/>
      </slot>
    </table>
  </article>
</template>

<script>
import PriceItem from './priceItem'

export default {
  name: 'priceList',
  props: {
    buyList: {
      type: Array
    },
    sellList: {
      type: Array
    },
    currentPrice: {
      type: Number,
      default: 0
    }
  },
  components: {
    appPriceItem: PriceItem
  },
  computed: {
    // 최대 최근 8개만 나오도록
    reverseSlicedSellList () {
      return this.sellList.slice(0, 8).reverse()
    },
    slicedBuyList () {
      return this.buyList.slice(0, 8)
    }
  }
}
</script>

<style scoped lang="less">
article {
  margin-top: 20px;
}

table {
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 20px;
}
</style>

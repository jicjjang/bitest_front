<template>
  <tr :style="currentPrice === item.price ? `background-color: #ffe804;` : ''">
    <td class="sellCount">{{ type === 'sell' ? item.count : '' }}</td>
    <td class="sellPrice">{{ type === 'sell' ? item.price : '' }}</td>
    <td class="buyPrice">{{ type === 'buy' ? item.price : '' }}</td>
    <td class="buyCount">{{ type === 'buy' ? item.count : '' }}</td>
  </tr>
</template>

<script>
export default {
  name: 'priceItem',
  props: {
    item: {
      type: Object
    },
    type: {
      type: String
    },
    currentPrice: {
      type: Number
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>
</style>

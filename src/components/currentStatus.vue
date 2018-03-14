<template>
  <article>
    <slot v-if="this.price && this.count">
      <div>대기중인 거래 내역: {{ this.remainTradeCount || 0 }}개</div>
      <div>최근 거래 신청 내역: {{ this.price }}원, {{ this.count }}개</div>
    </slot>
    <div v-else>최근 거래 신청 내역: 없음</div>
  </article>
</template>

<script>
export default {
  name: 'currentStatus',
  props: {
    price: {
      type: Number
    },
    count: {
      type: Number
    },
    remainTradeCount: {
      type: Number
    }
  }
}
</script>

<style scoped>
article {
  margin-top: 20px;
  font-size: 20px;
}
</style>

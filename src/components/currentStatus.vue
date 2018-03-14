<template>
  <article>
    <div v-if="this.price && this.count">최근 거래 신청 내역: {{ this.price }}원, {{ this.count }}개</div>
    <div v-else>최근 거래 신청 내역: 없음</div>
  </article>
</template>

<script>
export default {
  name: 'currentStatus',
  props: {
    type: {
      type: String
    },
    price: {
      type: Number
    },
    count: {
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

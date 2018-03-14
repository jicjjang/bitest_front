<template>
  <div id="app">
    <app-drop-zone :emitter="this.emitter"/>
    <app-loading-spinner v-if="(!this.buyList || this.buyList.length <= 0) && (!this.sellList || this.sellList.length <= 0)" />
    <slot v-else>
      <app-current-status :price="this.price" :count="this.count" :remainTradeCount="this.remainTradeCount"/>
      <app-price-list :buyList="this.buyList" :sellList="this.sellList" :currentPrice="this.currentPrice || 0" />
    </slot>
  </div>
</template>

<script>
import io from 'socket.io-client'
import DropZone from './components/dropZone'
import LoadingSpinner from './components/loadingSpinner'
import CurrentStatus from './components/currentStatus'
import PriceList from './components/priceList'

export default {
  name: 'App',
  components: {
    appDropZone: DropZone,
    appLoadingSpinner: LoadingSpinner,
    appCurrentStatus: CurrentStatus,
    appPriceList: PriceList
  },
  data () {
    return {
      socket: null,
      buyList: [],
      sellList: [],
      type: '',
      price: 0,
      count: 0,
      currentPrice: 0,
      remainTradeCount: 0
    }
  },
  created () {
    let that = this
    this.socket = io('http://localhost:3000')

    this.socket.on('init data parse', data => {
      that.buyList = data.buyList
      that.sellList = data.sellList
    })

    this.socket.on('file parser', data => {
      that.type = data.type || ''
      that.price = parseInt(data.price) || 0
      that.count = parseInt(data.count) || 0
      that.currentPrice = parseInt(data.currentPrice) || 0
      that.remainTradeCount = parseInt(data.remainTradeCount) || 0
      that.buyList = data.buyList || []
      that.sellList = data.sellList || []
    })
  },
  methods: {
    emitter (title, data) {
      this.socket.emit(title, data)
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  font-size: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app {
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 601px) {
    width: 60%;
    margin: 20px auto 0 auto;
  }
  min-width: 320px;
  max-width: 800px;
  -webkit-transition: margin 500ms, width 500ms; /* Safari */
  transition: margin 500ms, width 500ms;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

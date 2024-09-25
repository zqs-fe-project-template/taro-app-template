<template>
  <view class="index">
    <text @tap="lanuchApi">{{ msg }}</text>
  </view>
</template>

<script lang="ts">
import { ref } from 'vue'
import './index.less'
import { testApi } from '@/api'

export default {
  setup () {
    const msg = ref('Hello world----')
    console.log('999999')
    const lanuchApi = async () => {
      const res = await testApi()
      console.log(res)
    }
    return {
      msg,
      lanuchApi
    }
  }
}
</script>

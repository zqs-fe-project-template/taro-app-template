<!-- <template>
  <view class="index">
    <text @tap="lanuchApi">{{ msg }}</text>
    <text class="red">color red</text>
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
<style lang="less" scoped>
.red{
  color: red;
  font-size: 20px;
}
</style> -->

<template>
  <view>
    曹尼玛
    <router-view></router-view>
    <nut-tabbar v-model="active" bottom safe-area-inset-bottom placeholder @tab-switch="tabSwitch">
      <nut-tabbar-item 
        v-for="(item, index) in List" 
        :key="index" 
        :tab-title="item.title" 
        :icon="item.icon"
      >
      </nut-tabbar-item>
    </nut-tabbar>
  </view>
</template>
<script setup>
import { h, ref } from 'vue'
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro';

const List = [
  {
    title: '首页',
    name: '/home',
    icon: h(Home)
  },
  {
    title: '赛事',
    name: '/competition',
    icon: h(Category)
  },
  {
    title: '新闻',
    name: '/news',
    icon: h(Find)
  },
  {
    title: '我的',
    name: '/mine',
    icon: h(My)
  }
]
const active = ref(0)
const tabSwitch = (...res) => {
  console.log('linkTo', res, Taro)
  Taro.navigateTo({
    url: '/mine',
  })
}
</script>

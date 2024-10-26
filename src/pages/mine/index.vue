<!-- <template>
    <view>我的</view>
</template>
<script setup>
</script>
 -->


<template>
    <view>
      曹尼玛---我的
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
  
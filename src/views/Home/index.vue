<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
u件衣服ii纽约给你一个与iyu件衣服ii纽约给你一个与iy
  </HomePanel>
  <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
和v独有的统一回复图有风度不要他
  </HomePanel>
</template>
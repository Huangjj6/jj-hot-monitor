
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss' // 导入测试API

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy', {
  mounted(el, binding) {
  useIntersectionObserver(
    el,
    ([entry],) => {
      if (entry.isIntersecting) {
        el.src = binding.value
      }
    },
  )
}
})
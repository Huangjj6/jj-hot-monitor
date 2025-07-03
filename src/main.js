import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss' // 导入测试API
import { componentPlugin } from './components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

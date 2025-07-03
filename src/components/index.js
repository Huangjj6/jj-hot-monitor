//所有组件进行全局注册
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin={
    install(app){
        //在app上进行扩展，app提供component directive 函数
        //等功能进行扩展
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
        //app.component('组件名字',配置对象)
    }
}
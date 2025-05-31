import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
        mounted(el, binding) {
            const {stop}=useIntersectionObserver(
                el,
                ([entry],) => {
                    if (entry.isIntersecting) {
                        el.src = binding.value
                        stop()
                    }
                })
            }
        })
    }
}
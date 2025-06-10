//封装分类数据业务相关代码
import { ref } from "vue";
import { onMounted } from "vue";
import { getTopCategoryAPI } from "@/apis/category";
import { useRoute,onBeforeRouteUpdate } from "vue-router"
export function useCategory() {
    const CategoryData = ref({});
    const route = useRoute();
    const getTopCategory = async (id=route.params.id) => {
        const res = await getTopCategoryAPI(id);
        CategoryData.value = res.result;
    };
    onMounted(() => {
        getTopCategory(); 
    })
    onBeforeRouteUpdate((to) => {
        getTopCategory(to.params.id);
    })
    return { CategoryData };
}
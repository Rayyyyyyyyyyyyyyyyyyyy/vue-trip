<template lang="pug">
HomeHeader(v-if="showHeader")
router-view
FooterComponent

</template>
<script  lang="ts">
import FooterComponent from "@/components/FooterComponent.vue"
import HomeHeader from "@/components/HomePage/HomeHeader.vue"

import {reactive} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";
import {useRoute} from "vue-router";
import {defineComponent, toRefs, watch} from "vue";
import RouterNames from "@/router/name";
import AOS from "aos";

export default defineComponent({
  name: "HomeLayout",
  components: {
    HomeHeader,
    FooterComponent
  },
  props: {

  },
  setup(props) {

    const state = reactive({
      scrollYNum: 0,
      showHeader: true
    })
    const router = useRoute()

    const getWindowScroll = () => {
      window.addEventListener("scroll", ()=>{

        state.showHeader = window.scrollY <= 200;
      })
    }

    onMounted(()=>{
      getWindowScroll()
    })

    watch(()=>router.name, ()=>{
      if(router.name != RouterNames.home) {
        window.removeEventListener("scroll", ()=> {})
      }
    })




    return {
      ...toRefs(state),
    }
  }
});

</script>
<style lang="scss" scoped>

</style>

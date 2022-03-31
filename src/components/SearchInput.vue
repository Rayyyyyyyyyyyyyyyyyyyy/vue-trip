<template lang="pug">
.search
  el-input(
    v-model="searchValue"
    size="large")
  .search-select
    el-select
    el-select
    el-select
    el-select

  .search-submit
    img(:src="require('@/assets/images/plane.png')" alt="plane")




</template>
<script lang="ts">

import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";
import {reactive} from "@vue/reactivity";
import SvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  name: "SearchInput",
  components: {
    SvgIcon

  },
  props: {

  },
  setup(props) {
    const state = reactive({
      searchValue: ""
    })



    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>
.search{
  @apply bg-bg shadow-lg rounded-full h-14 w-full pl-6 pr-16 py-4;
  @apply flex items-center relative;

  &-select {
    @apply flex items-center;

    @media (max-width: 768px) {
      @apply hidden;
    }
  }

  &-submit{
    @apply w-14 h-14 rounded-full bg-primary absolute right-0 top-0;
    @apply flex items-center justify-center;
    @apply cursor-pointer;

    img {
      @apply w-10/12;
    }
  }
}
.el-input{
  @apply mr-2;
}
.el-select + .el-select {
  @apply ml-2;
}


</style>

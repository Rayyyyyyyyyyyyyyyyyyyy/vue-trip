<template lang="pug">
.search
  input(
    v-model="searchValue")
  .search-select
    .search-select-item
      select
    .search-select-item
      select
    .search-select-item
      select


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

  input {
    @apply p-2 rounded;
    @apply flex-1 mr-2;

  }

  &-select {
    @apply flex items-center flex-1;
    @apply pl-2 border-l-2  border-secondary/30;

    @media (max-width: 768px) {
      @apply hidden;
    }
    &-item {
      @apply flex-1 mr-2 pr-2;
      @apply border-r-2 border-secondary/30;

      select {
        @apply p-2 rounded w-full;
      }
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


</style>

<template lang="pug">
.popular
  .popular--bg
  .page-title.popular--title 熱門行程
  el-row(:gutter="20").popular--row
    el-col(:span="8")
      TripCard(:imgUrl="testImg")
    el-col(:span="8")
      TripCard(:imgUrl="testImg")
    el-col(:span="8")
      TripCard(:imgUrl="testImg")






</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";
import testImg from "@/assets/images/banner/yilan-county.jpg"

export default defineComponent({
  name: "HomeGroup",
  components: {
    TripCard
  },
  props: {

  },
  setup(props) {
    return {
      testImg
    }
  }
});
</script>

<style lang="scss" scoped>
.popular {
  @apply py-10 w-full relative my-6;
  min-height: 500px;

  &--bg {
    @apply h-5/6 w-screen bg-primary-light/20;
    @apply absolute top-0 left-0;
    min-height: 300px;
    transform: translateX(2%);
    z-index: 1;

  }

  &--title {
    transform: translate(-10px, -20px);
    @apply absolute top-0 left-0;
    @apply bg-bg z-30 inline;
    @apply p-4;
    @apply border-b-4 border-text;
  }

  &--row {
    @apply absolute ;
    @apply top-24 z-30;

  }

}
</style>

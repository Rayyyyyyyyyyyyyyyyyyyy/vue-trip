<template lang="pug">
.landing-header
  .introduction.text-vertical
    .introduction--line
    .introduction--text Introduction
.container
  HomeExplore
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import HomeExplore from "@/components/HomePage/HomeExplore.vue";
import AOS from "aos";

export default defineComponent({
  name: "HomePage",
  components: {HomeExplore},
  props: {

  },
  setup(props) {







    return {
    }
  }
});
</script>

<style lang="scss" scoped>
.landing-header {
  @apply h-screen w-screen relative;
  background: url("@/assets/images/banner/yilan-county.jpg") no-repeat;
  background-size: cover;



  .introduction{
    @apply absolute bottom-0 left-32 z-20;
    @apply flex items-center flex-row-reverse;
    @apply cursor-pointer;

    @media (max-width: 768px) {
      @apply left-16;
    }

    &--line{
      @apply border-r-2 border-white h-16 mt-2;
    }

    &--text {
      @apply text-xl text-white;

    }
  }
}
</style>

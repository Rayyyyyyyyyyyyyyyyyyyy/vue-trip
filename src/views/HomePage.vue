<template lang="pug">
.landing-header
  .landing-header--search
    SearchInput
  .introduction.text-vertical
    .introduction--line
    .introduction--text Introduction
.container
  HomeExplore
  HomePopular
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import HomeExplore from "@/components/HomePage/HomeExplore.vue";
import HomePopular from "@/components/HomePage/HomePopular.vue";
import SearchInput from "@/components/SearchInput.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    SearchInput,
    HomeExplore,
    HomePopular,
  },
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

  &--search {
    @apply absolute top-1/3 left-1/4 z-30 w-1/2;
  }


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

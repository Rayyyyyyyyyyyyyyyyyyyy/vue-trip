<template lang="pug">
.landing-header
  .landing-header--search(
    data-aos="fade-zoom-in"
    data-aos-easing="ease-out"
    data-aos-duration="900"
    data-aos-delay="1300"
    )
    .landing-header--search-title 近在咫尺的美
    SearchInput
  .landing-header--bottomArrow
    .landing-header--bottomArrow-item
    .landing-header--bottomArrow-item
    .landing-header--bottomArrow-item
  .landing-header--down SCROLL DOWN
  .introduction.text-vertical
    .introduction--line
    .introduction--text Introduction
  .landing-header--taiwan
    TaiwanMap


.container
  HomeExplore
  HomePopular
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import HomeExplore from "@/components/HomePage/HomeExplore.vue";
import HomePopular from "@/components/HomePage/HomePopular.vue";
import SearchInput from "@/components/SearchInput.vue";
import AOS from "aos";
import SvgIcon from "@/components/SvgIcon.vue";
import TaiwanMap from "@/components/HomePage/TaiwanMap.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    TaiwanMap,
    SvgIcon,
    SearchInput,
    HomeExplore,
    HomePopular,
  },
  props: {

  },
  setup(props) {
    onMounted(()=>{
      AOS.init()
    })



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
    @apply absolute top-1/2 z-30 w-3/5;
    left: 20%;
    @apply flex flex-col items-start;

    &-title {
      @apply text-3xl mb-4 text-white font-bold;
    }
  }

  &--bottomArrow {
    @apply absolute z-30 cursor-pointer;
    bottom: 15%;
    left: 49%;

    &-item {
      @apply w-6 h-2;
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
      animation: move 3s ease-out infinite;
    }


    &-item:first-child {
      animation: move 1s ease-out 1s infinite;
    }
    &-item:nth-child(2) {
      animation: move 1s ease-out 2s infinite;
      @apply my-4;
    }
    &-item:nth-child(3) {
      animation: move 1s ease-out 3s infinite;
    }

    &-item:before,
    &-item:after {
      content: ' ';
      @apply absolute top-0 h-full w-1/2 bg-white;
    }

    &-item:before {
      @apply left-0;
      transform: skew(0deg, 30deg);
    }

    &-item:after {
      @apply right-0;
      transform: skew(0deg, -30deg);
    }


  }
  &--down {
    @apply w-full text-center;
    @apply text-white font-bold text-xl;
    @apply absolute left-0 cursor-pointer;
    bottom: 3%;
  }

  &--taiwan {
    @apply absolute bottom-0 right-4 ;
    @apply opacity-70 w-1/4;
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

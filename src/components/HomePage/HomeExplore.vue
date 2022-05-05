
<template lang="pug">
.explore
  .explore-title
    .page-title 行程規劃
    .explore-title-hr
    .page-sub-title.text-vertical 探索


  .explore-banner
    .explore-banner-left
      .explore-banner-item(
        data-aos="fade-right"
      )
        .hover-box 欣賞美景
        img(:src="require('@/assets/images/explore/e1.jpg')" alt="explore-img")
      .explore-banner-item(
        data-aos="fade-up-right"
      )
        .hover-box 輕鬆度假
        img(:src="require('@/assets/images/explore/e2.jpg')" alt="explore-img")
    .explore-banner-right
      .explore-banner-item(
        data-aos="fade-left"
      )
        .hover-box
          svg-icon(name="header-logo" :width="200"  :height="140")
        img(:src="require('@/assets/images/explore/e6.jpg')" alt="explore-img")
      .explore-banner-right--bottom(
        data-aos="fade-up-left"
      )
        .explore-banner-item
          .hover-box 探索城市
          img(:src="require('@/assets/images/explore/e3.jpg')" alt="explore-img")
        .explore-banner-item
          .hover-box 情侶出遊
          img(:src="require('@/assets/images/explore/e4.jpg')" alt="explore-img")
        .explore-banner-item
          .hover-box 夜訪古蹟
          img(:src="require('@/assets/images/explore/e5.jpg')" alt="explore-img")



</template>
<script  lang="ts">
import {defineComponent, onMounted} from "vue";
import AOS from "aos";

export default defineComponent({
  name: "HomeExplore",
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
.explore {
  @apply py-8 w-full mb-6;

  &-title {
    @apply flex items-center mb-8;

    &-hr {
      @apply mx-10 h-8 border-bg-footer border-r-2;
    }

  }

  &-banner {
    @apply flex w-full h-full;
    max-height: 80vh;
    @media (max-width: 550px) {
      @apply flex-col;
    }
    img {
      @apply object-cover;
      @apply w-full h-full;

    }
    &-item {
      @apply relative;


      img {
        &:hover{
          transform: scale(1.2, 1.2);
          transition: .5s;
        }
      }
      .hover-box {
        @apply absolute left-0 top-0 z-20 bg-transparent;
        @apply w-full h-full cursor-pointer;
        color: transparent;
        svg{
          @apply hidden;
        }
        &:hover {
          @apply bg-bg-footer/50;
          transition: .5s;
          @apply text-white text-3xl flex items-center justify-center;
          svg{
            @apply block;
          }
        }
      }

    }

    &-left {
      @apply w-5/12 mr-2;
      @apply flex flex-col overflow-hidden;
      @media (max-width: 550px) {
        @apply w-full mb-2;
      }

      .explore-banner-item{
        @apply w-full h-1/2;
      }
      .explore-banner-item + .explore-banner-item {
        @apply mt-2;
      }

    }

    &-right {
      @apply w-7/12;
      @apply flex flex-col overflow-hidden;
      @media (max-width: 550px) {
        @apply w-full;
        height: 260px;
      }

      .explore-banner-item {
        @apply w-full h-4/5;
        @media (max-width: 550px) {
          @apply h-2/3;
        }
      }
      &--bottom {
        @apply w-full h-full flex overflow-hidden mt-2;
        .explore-banner-item {
          @apply w-1/3 h-full;

        }
      }
    }
  }

}
</style>

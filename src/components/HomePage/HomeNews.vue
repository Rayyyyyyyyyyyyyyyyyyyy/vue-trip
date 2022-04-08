<template lang="pug">
.news
  .news-container.news-container-bg1
    .news-container-shadow
    .news-container-main
      NewsContent
  .news-container.news-container-bg2
    .news-container-shadow
    .news-container-main
      NewsContent(
        title="建立屬於自己的專屬旅行"
        content="看到某個旅行社推出的行程很心動，但人數不夠開不了團？現在立即開創屬於自己的旅行， 告訴大家你的行程，找找看有沒有人願意一起報名。 從此不必在煩惱行程，湊到足夠的人數及可出發!"
        button_text="立即揪團"
      )

  .news-comming
    .news-comming-left
      svg-icon(name="text" :width="300" :height="300" )
    .news-comming-right
      .news-comming-title
        .page-title(
          data-aos="fade-zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="900"
          data-aos-delay="600"
          data-aos-offset="200"
        ) #即將開團
        .hr(
          data-aos="zoom-in-left"
          data-aos-delay="200"
          data-aos-duration="600"
        )
      .news-comming-cards
        el-row(
          data-aos="fade-zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="900"
          data-aos-delay="800"
          data-aos-offset="200"
          :gutter="20")

          el-col(:span="12")
            TripCard(:imgUrl="testImg")
          el-col(:span="12")
            TripCard.mb-10(:imgUrl="testImg")

        el-row(
          data-aos="fade-zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="900"
          data-aos-delay="800"
          data-aos-offset="200"
          :gutter="20")

          el-col(:span="12")
            TripCard(:imgUrl="testImg")
          el-col(:span="12")
            TripCard.mb-10(:imgUrl="testImg")

        el-button.btn(
          data-aos="zoom-in"
          type="info"
          plain
          size="large") 更多








</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";
import NewsContent from "@/components/HomePage/NewsContent.vue";
import testImg from "@/assets/images/banner/yilan-county.jpg"
import TripCard from "@/components/TripCard.vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  name: "HomeNews",
  components: {
    SvgIcon,
    NewsContent,
    TripCard
  },
  props: {

  },
  setup(props) {

    onMounted(()=>{
      AOS.init()
    })




    return {
      testImg
    }
  }
});
</script>

<style lang="scss" scoped>
.news {
  &-container {
    @apply w-screen h-screen relative;

    &-bg1 {
      background: url("@/assets/images/fixed-bg/cople.jpg") no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    &-bg2 {
      background: url("@/assets/images/fixed-bg/girl.jpg") no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    &-shadow {
      @apply absolute top-0 left-0;
      @apply w-full h-full;
      @apply bg-secondary-dark/70 z-10;
    }
    &-main {
      @apply absolute top-0 left-0;
      @apply z-20 w-full h-full;
      @apply text-white;
      @apply flex flex-col items-center justify-center;

    }
  }


  &-comming {
    @apply w-screen h-full;
    @apply flex items-center;
    @apply py-10;

    &-left {
      @apply flex-1 h-1/2 bg-bg-light/50 w-full;
      @apply flex items-center justify-center;
      transform: scale(2);
    }
    &-right {
      @apply flex-1 p-6;
    }

    &-title {
      @apply flex items-center mb-10;

      .hr {
        @apply border-t-2 border-secondary-dark flex-1 ml-6;
      }
    }
    &-cards {
      @apply w-10/12 flex flex-col items-center justify-center;
    }
  }

}
</style>

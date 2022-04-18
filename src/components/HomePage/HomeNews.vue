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
          justify="center"
          :gutter="20")

          el-col(:span="first_card_span")
            TripCard(
              @card_clicked="clickedFun"
              :card_data="card_one")

          el-col(:span="sec_card_span")
            TripCard(
              @card_clicked="clickedFun"
              :card_data="card_two")


        el-row(
          data-aos="fade-zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="900"
          data-aos-delay="800"
          data-aos-offset="200"
          justify="center"
          :gutter="20")

          el-col(:span="first_card_span")
            TripCard(
              @card_clicked="clickedFun"
              :card_data="card_three")

          el-col(:span="sec_card_span")
            TripCard(
              @card_clicked="clickedFun"
              :card_data="card_fore")


        el-button.btn.mt-10(
          @click="goMoreUrl"
          data-aos="zoom-in"
          type="info"
          plain
          size="large") 更多








</template>
<script lang="ts">

import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";
import NewsContent from "@/components/HomePage/NewsContent.vue";
import TripCard from "@/components/TripCard.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import {reactive} from "@vue/reactivity";
import getRandomInt from "@/utils/getRandom";

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
    const state = reactive({
      first_card_span: 12,
      sec_card_span: 12,

      card_one: {} as any,
      card_two: {} as any,
      card_three: {} as any,
      card_fore: {} as any,
    })
    const setSpan = () => {
      if(window.innerWidth > 1024){
        state.first_card_span = 12
        state.sec_card_span = 12
      }else{
        state.first_card_span = 16
        state.sec_card_span = 0

      }
    }

    window.addEventListener("resize", ()=>{
      console.log(window.innerWidth)
      setSpan()
    })


    const getPopularData = async () => {
      const activity = await require("@/assets/jsonData/activity.json")
      // console.log("activity", activity)
      activity.map((_: any)=>{
        state.card_one = activity[getRandomInt(activity.length + 1)]
        state.card_two = activity[getRandomInt(activity.length + 1)]
        state.card_three = activity[getRandomInt(activity.length + 1)]
        state.card_fore = activity[getRandomInt(activity.length + 1)]
      })
    }

    onMounted(()=>{
      AOS.init()
      setSpan()
      getPopularData()
    })

    const clickedFun = (data: any) => {
      console.log("data", data)
    }

    const goMoreUrl = () => {

    }


    return {
      ...toRefs(state),
      clickedFun,
      goMoreUrl
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
      transform: scale(1.5);
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
      @apply w-full flex flex-col items-center justify-center;
    }
  }

}

.el-row + .el-row {
  @apply mt-10;
}
</style>

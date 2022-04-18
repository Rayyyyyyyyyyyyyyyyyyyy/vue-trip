<template lang="pug">
.popular
  .popular--bg
  .page-title.popular--title 熱門行程
  el-row(:gutter="20").popular--row
    el-col(:span="first_card_span"
      data-aos="fade-left"
      data-aos-delay="500")
      TripCard(
        :trip_content="card_one.description"
        :trip_title="card_one.actName"
        :trip_local="card_one.cityName"
        :imgUrl="card_one.imageUrl")

    el-col(:span="sec_card_span"
      data-aos="fade-left"
      data-aos-delay="600")
      TripCard(
        :trip_content="card_two.description"
        :trip_title="card_two.actName"
        :trip_local="card_two.cityName"
        :imgUrl="card_two.imageUrl")

    el-col(:span="third_card_span"
      data-aos="fade-left"
      data-aos-delay="700")
      TripCard(
        :trip_content="card_three.description"
        :trip_title="card_three.actName"
        :trip_local="card_three.cityName"
        :imgUrl="card_three.imageUrl")

  el-button.btn.more-btn(
    data-aos="zoom-in"
    type="info" plain
    size="large") 更多






</template>
<script lang="ts">
import { defineComponent, onMounted, toRefs, watch} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";
import {reactive} from "@vue/reactivity";
import getRandomInt from "@/utils/getRandom";

export default defineComponent({
  name: "HomeGroup",
  components: {
    TripCard
  },
  props: {


  },
  setup(props) {
    const state = reactive({
      first_card_span: 8,
      sec_card_span: 8,
      third_card_span: 8,


      card_one: {} as any,
      card_two: {} as any,
      card_three: {} as any,
    })

    const setSpan = () => {
      if(window.innerWidth > 768){
        state.first_card_span = 8
        state.sec_card_span = 8
        state.third_card_span = 8
      }else{
        state.first_card_span = 12
        state.sec_card_span = 12
        state.third_card_span = 0

        if(window.innerWidth <= 375){
          state.first_card_span = 24
          state.sec_card_span = 0
          state.third_card_span = 0

        }
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
      })
    }

    onMounted(()=>{
      AOS.init()
      setSpan()
      getPopularData()

    })


    return {
      ...toRefs(state),
    }
  }
});
</script>

<style lang="scss" scoped>
.popular {
  @apply py-10 w-full relative my-6;
  min-height: 570px;

  &--bg {
    @apply h-3/4 w-screen bg-primary-light/20;
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
    @apply absolute w-full;
    @apply top-24 z-30 left-24;

  }

}
.more-btn {
  @apply absolute bottom-0 left-1/2;
}
</style>

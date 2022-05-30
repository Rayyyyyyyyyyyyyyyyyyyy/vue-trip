<template lang="pug">
.trip-list
  Header
  .container
    .container-item(v-for="(city, idx) in cityList")
      .city-title
        svg-icon(
          data-aos="fade-up-right"
          data-aos-delay="1000"
          data-aos-duration="900"
          data-aos-offset="200"
          name="plane")
        .line(
          data-aos="zoom-in-right"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-offset="200"
        )
        p(
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="900"
          data-aos-offset="200"
        ) {{ city }}

      span(v-if="renderData.length > 0")
        .city-trip
          el-row(:gutter="20")
            el-col(
              :span="6"
              v-for="trip in renderData[idx]")
              TripListItem(
                :imgUrl="trip.imageUrl"
                :trip_title="trip.actName"
                :trip_content="trip.description"
                :trip_id="trip.actId"
                :key="trip.actId"
              )


      el-empty(v-else)











</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Header from "@/components/HomePage/Header.vue";
import TripListItem from "@/components/TripListItem.vue";
import {TActivity} from "@/types/apiTypes";
import AOS from "aos";

export default defineComponent({
  name: "TripList",
  components: {
    Header,
    TripListItem
  },
  props:{
    keyword: {
      type: String
    }
  },
  setup(props){
    const state = reactive({
      activity: [] as TActivity[],
      cityList: [] as string[],
      renderData: [] as any,
    })
    watch(()=> props.keyword, ()=>{
      state.cityList = [props.keyword as string]
      getCityTrip(state.activity)
    })

    const fetchData = async () => {
      state.activity = await require("@/assets/jsonData/activity.json")
    }

    const getTitle = (data: TActivity[]) => {
      let cityList = [] as string[]
      data.map((_: any)=>{
        cityList.push((_.cityName).split(" ")[0])
      })
      state.cityList = cityList.filter((city: string, idx: number)=>{
        return cityList.indexOf(city) == idx;
      })
    }

    const getCityTrip = (data: TActivity[]) => {
      let cityList = state.cityList
      let tripArr = [] as any
      for(let x = 0; x < cityList.length; x ++) {
        let city = [] as any
        for(let i = 0; i < data.length; i ++) {
          if(data[i].cityName.includes(cityList[x])){
            city.push(data[i])
          }
        }
        tripArr.push(city)
      }

      state.renderData = tripArr
      console.log("renderData", state.renderData)
    }








    onMounted( async ()=>{
      await AOS.init()
      await fetchData()
      await getTitle(state.activity)
      if(props.keyword) {
        state.cityList = [props.keyword as string]
        await getCityTrip(state.activity)
      }else{
        await getCityTrip(state.activity)

      }

    })


    //  https://readcereal.com/category/travel/
    return {
      ...toRefs(state),
    }
  }
});
</script>

<style lang="scss" scoped>
.trip-list {
  min-height: 100vh;
  background: url("@/assets/images/fixed-bg/blue-beach.jpeg") no-repeat;
  background-size: cover;
  @apply p-6;
  .header {
    @apply rounded-lg;
  }


  .container {
    @apply bg-white/40 rounded-xl;

    &-item {
      @apply my-4 pt-4;
    }
    .city {
      &-title {
        @apply text-3xl text-text;
        @apply flex items-center;

        .line {
          @apply w-24 mx-4;
          @apply border-dotted border-t-2 border-bg-footer;
        }
      }
      &-trip {
        @apply py-4;
      }
    }

  }

}

</style>


<template lang="pug">
.search

  .search-select
    .search-select-item
      select(v-model="city_name" @change="citySelected")
        option(value="" disabled selected) 城市
        option(v-for="(item, idx) in cityArr"
          :key="idx"
          :label="item.label"
          :value="item.value")

    .search-select-item
      select(v-model="area_name")
        option(value="" disabled selected) 區域
        option(v-for="(item, idx) in areaArr"
          :key="idx"
          :label="item.label"
          :value="item.value")



  .search-submit(@click="searchSubmit")
    img(:src="require('@/assets/images/plane.png')" alt="plane")




</template>
<script lang="ts">

import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";
import {reactive} from "@vue/reactivity";
import SvgIcon from "@/components/SvgIcon.vue";
import {city_name} from "@/const/appConsts";
import RouterNames from "@/router/name";
import router from "@/router";

export default defineComponent({
  name: "SearchInput",
  components: {
    SvgIcon

  },
  props: {

  },
  setup(props) {
    const state = reactive({
      city_name: "",
      area_name: "",
      cityArr: [] as {
        label: string,
        value: string
      }[],
      activity: [] as any[],
      areaArr: [] as {
        label: string,
        value: string
      }[],
    })


    const getCityOption = async () => {
      state.activity = await require("@/assets/jsonData/activity.json")
      const cityList = [] as any[]
      state.activity.map((_: any)=>{
        cityList.push((_.cityName).split(" ")[0])
      })
      const cityNameList = cityList.filter((city: string, idx: number)=>{
        return cityList.indexOf(city) == idx;
      })
      cityNameList.map((_)=>{
        state.cityArr.push({
          label: _,
          value: _
        })
      })
    }

    onMounted(()=>{
      getCityOption()
    })

    const citySelected = () => {
      state.areaArr = []
      if(state.city_name != "") {
        const areaArr = state.activity.filter((_: any) => {
          return  _.cityName.includes(state.city_name) == true
        })
        const areaList = [] as any[]
        areaArr.map((_: any)=>{
          if((_.cityName).split(" ")[2] != undefined){
            areaList.push((_.cityName).split(" ")[2])
          }
        })
        const areaNameList = areaList.filter((city: string, idx: number)=>{
          return areaList.indexOf(city) == idx;
        })
        areaNameList.map((_)=>{
          state.areaArr.push({
            label: _,
            value: _
          })
        })

      }
    }

    const searchSubmit = () => {
      const selectedTrip = state.activity.filter((_)=>{
        if(state.area_name != "") {
          return  _.cityName.includes(state.area_name) == true
        }else{
          return  _.cityName.includes(state.city_name) == true
        }
      })
      console.log("selectedTrip", selectedTrip)

      if(selectedTrip.length > 1){
        if(selectedTrip.length == state.activity.length) {
          router.push({
            name: RouterNames.tripList
          })
        }else{
          let keyword
          if(state.area_name == "") {
            keyword = selectedTrip[0].cityName.split(" ")[0]
            router.push({
              name: RouterNames.tripList,
              params: {
                keyword: keyword
              }
            })
          }else{
            keyword = selectedTrip[0].cityName.split(" ")[0] + "," + selectedTrip[0].cityName.split(" ")[2]
            router.push({
              name: RouterNames.tripList,
              params: {
                keyword: keyword
              }
            })
          }
        }
      }else{
        router.push({
          name: RouterNames.tripPage,
          params: {
            id: selectedTrip[0].actId
          }
        })
      }

    }




    return {
      ...toRefs(state),
      citySelected,
      searchSubmit
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
    @apply pl-2;

    @media (max-width: 768px) {
      @apply hidden;
    }
    &-item {
      @apply flex-1 mr-2 pl-2;

      select {
        @apply p-2 rounded w-full bg-white;
      }
    }
    &-item + &-item {
      @apply border-l-2 border-secondary/30;

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

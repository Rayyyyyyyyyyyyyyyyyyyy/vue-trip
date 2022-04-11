<template lang="pug">
.landing-header
  .landing-header--weather(
    v-if="userLocation != ''"
    data-aos-easing="ease-out"
    data-aos-duration="900"
    data-aos-delay="1000")
    .landing-header--weather-block
      img(
        data-aos="fade-right"
        :src=`weatherIconRul+"/"+timeStatus+"/"+weatherValue + ".svg"` alt="")
      .city(
        data-aos="fade-left"
      ) {{ userLocation }}
    .detail(
      data-aos="fade-up"
    ) {{ weatherDetail }}
      .detail-rain 降雨機率: {{ rainPercentage }} %
      .detail-weather
        p {{ min }}°C - {{ max }}°C


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
  .landing-header--taiwan(
    v-if="userLocation != ''"
  )
    TaiwanMap(:activePath="userLocation")


.container
  HomeExplore
  HomePopular

HomeNews
</template>

<script lang="ts">
import {defineComponent, onMounted, toRefs} from "vue";
import HomeExplore from "@/components/HomePage/HomeExplore.vue";
import HomePopular from "@/components/HomePage/HomePopular.vue";
import SearchInput from "@/components/SearchInput.vue";
import AOS from "aos";
import SvgIcon from "@/components/SvgIcon.vue";
import TaiwanMap from "@/components/HomePage/TaiwanMap.vue";
import HomeNews from "@/components/HomePage/HomeNews.vue";
import {reactive} from "@vue/reactivity";
import BaseApi from "@/services/api";
import {ElMessage} from "element-plus";
import {MAP_API_KEY} from "@/config";
import {weatherIconRul} from "@/const/appConsts";
import dayjs from "dayjs";

export default defineComponent({
  name: "HomePage",
  components: {
    TaiwanMap,
    SvgIcon,
    SearchInput,
    HomeExplore,
    HomePopular,
    HomeNews,
  },
  props: {

  },
  setup(props) {
    const state = reactive({
      addressJSON: {} as any,

      cityName: "",
      areaName: "",

      weatherCityArr: [] as any,


      userLocation: "",
      weatherValue: "",
      weatherDetail: "",
      weatherIcon: "sun",
      rainPercentage: "",
      min: 0,
      max: 0,
      timeStatus: "day"
    });

    const getWeather = async () => {
      const result = await BaseApi.getWeatherData()
      state.weatherCityArr = result.records.location
    }

    const getUserLocal = () => {
      const userLocal = state.weatherCityArr.filter((_: any)=>{
        return _.locationName == state.cityName
      })[0]
      state.userLocation = userLocal.locationName
      getWeatherDetail(userLocal.weatherElement)
    }

    const getWeatherDetail = (cityWeather: any[]) => {
      state.weatherDetail = cityWeather[0].time[0].parameter.parameterName
        if(Number(cityWeather[0].time[0].parameter.parameterValue) < 10 ){
          state.weatherValue = "0" + cityWeather[0].time[0].parameter.parameterValue
        }else{
          state.weatherValue = cityWeather[0].time[0].parameter.parameterValue
        }
      state.rainPercentage = cityWeather[1].time[0].parameter.parameterName
      state.min = cityWeather[2].time[0].parameter.parameterName
      state.max = cityWeather[4].time[0].parameter.parameterName
    }

    const dateState = () => {
      let date = new Date();
      if (date.getHours() >= 6 && date.getHours() < 18) {
        state.timeStatus = "day"
      } else {
        state.timeStatus = "night"
      }
    }


    onMounted(async ()=>{
      AOS.init()
      await getWeather()
      await dateState()
      await navigator.geolocation.getCurrentPosition(localSuccess, (err)=>{
        ElMessage.error(err.message);
      })

    })

    const localSuccess = async (position: any) => {
      const latlng = position.coords.latitude + "," + position.coords.longitude
      await getAddress(latlng)
      await setCityArea()
      await getUserLocal()
    }

    const getAddress = async (payload: string) => {
      const result = await BaseApi.getAddress({
        latlng: payload,
        key: MAP_API_KEY!
      })
      state.addressJSON = result.results[7]
    }

    const setCityArea = () => {
      const cityNameArr = Array.from(state.addressJSON.address_components[0].long_name)
      cityNameArr.map((_: any, idx: number)=>{
        if(_ == "台"){
          cityNameArr[idx] = "臺"
        }
      })
      state.cityName = (cityNameArr.join(""))
      state.areaName = state.addressJSON.address_components[1].long_name
    }








    return {
      ...toRefs(state),
      weatherIconRul
    }
  }
});
</script>

<style lang="scss" scoped>
.landing-header {
  @apply h-screen w-screen relative;
  background: url("@/assets/images/sign-up.jpg") no-repeat;
  background-size: cover;

  &--weather {
    @apply absolute top-1/4 z-30 w-3/5;
    left: 20%;
    @apply flex flex-col items-end text-white;

    &-block {
      @apply flex items-center mb-4;

      .city {
        @apply text-3xl ml-4;
      }
    }
    .detail {
      @apply text-xl text-center;

    }


  }

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

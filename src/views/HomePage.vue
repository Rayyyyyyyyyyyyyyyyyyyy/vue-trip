<template lang="pug">
.landing-header.landing-header-bg
  .landing-header--weather(
    v-if="cityName != ''"
    data-aos-easing="ease-out"
    data-aos-duration="900"
    data-aos-delay="1000")
    .landing-header--weather-block
      img(
        data-aos="fade-right"
        :src=`weatherIconRul+"/"+timeStatus+"/"+weatherValue + ".svg"` alt="")
      .city(
        data-aos="fade-left"
      ) {{ cityName }}
    .detail(
      data-aos="fade-up"
    ) {{ weatherDetail }}
      .detail-rain 降雨機率: {{ rainPercentage }} %
      .detail-weather
        p {{ min }}°C - {{ max }}°C

  .landing-header--bottomArrow
    .landing-header--bottomArrow-item
    .landing-header--bottomArrow-item
    .landing-header--bottomArrow-item
  .landing-header--down SCROLL DOWN
  .introduction.text-vertical
    .introduction--line
    .introduction--text Introduction
  .landing-header--taiwan(
    data-aos="zoom-out-left"
    v-if="cityName != ''"
  )
    TaiwanMap(
      @clickedCity="activeClicked"
      :activePath="cityName")


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
import {city_name, defaultImgUrl, weatherIconRul} from "@/const/appConsts";
import dayjs from "dayjs";
import getRandomInt from "@/utils/getRandom";

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
      addressCity: "",

      cityName: "",

      weatherCityArr: [] as any,


      weatherValue: "01",
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
      await navigator.geolocation.getCurrentPosition(localSuccess, (err)=>{
        ElMessage.error(err.message);
      })

    })

    const localSuccess = async (position: any) => {
      const latlng = position.coords.latitude + "," + position.coords.longitude
      await getAddress(latlng)
      await setCityArea()
      await getWeather()
      await dateState()
      await getUserLocal()
    }

    const getAddress = async (payload: string) => {
      const result = await BaseApi.getAddress({
        latlng: payload,
        key: MAP_API_KEY!
      })
      state.addressCity = result.plus_code.compound_code
    }

    const setCityArea = () => {
      Object.keys(city_name).map((_: string)=>{
        if(state.addressCity.indexOf(_) != -1){
          const start = state.addressCity.indexOf(_)
          const end = state.addressCity.indexOf(_) + _.length
          const defaultCity = Array.from(state.addressCity.slice(start, end))
          defaultCity.map((singleString: string, idx: number)=>{
            if(singleString == "台") {
              defaultCity[idx] = "臺"
            }
          })
          state.cityName = defaultCity.join("")
        }
      })

    }

    const activeClicked = async (cityName: string) => {
      state.cityName = cityName
      await getUserLocal()
      await changeBg(cityName)
    }

    const changeBg = async (city_name: string) => {
      const activity = await require("@/assets/jsonData/activity.json")
      const headerClassName = "landing-header"
      const bgClassName = "landing-header-bg"
      const landingHeaderDom = document.getElementsByClassName(headerClassName)[0] as HTMLElement
      landingHeaderDom.classList.remove(bgClassName)
      const city = activity.filter((_: any)=>{
        return  _.cityName.includes(city_name) == true && _.imageUrl != null
      })
      landingHeaderDom.style.background = `url(${defaultImgUrl}${city[getRandomInt(city.length)].imageUrl}) no-repeat`
      landingHeaderDom.style.backgroundSize = "cover"

    }





    return {
      ...toRefs(state),
      weatherIconRul,
      activeClicked
    }
  }
});
</script>

<style lang="scss" scoped>
.landing-header-bg {
  background: url("@/assets/images/sign-up.jpg") no-repeat;
  background-size: cover;
}
.landing-header {
  @apply h-screen w-screen relative;


  &--weather {
    @apply absolute z-30;
    @apply flex flex-col items-end text-white;
    @apply bg-secondary/50 shadow-xl rounded-lg;
    @apply py-6 px-10;
    left: 15%;
    top: 10%;


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

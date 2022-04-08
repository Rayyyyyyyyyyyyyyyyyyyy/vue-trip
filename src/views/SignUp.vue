<template lang="pug">
.map-box(id="map")
  //GMapMap(
  //  :center="{lat: lat, lng: lng}"
  //  :zoom="7"
  //  map-type-id="terrain")






</template>
<script lang="ts">

import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";
import {reactive} from "@vue/reactivity";
import map from "@/store/map";
import {ElMessage} from "element-plus";
import { Loader } from "@googlemaps/js-api-loader";


export default defineComponent({
  name: "SignUp",
  props: {

  },
  setup(props) {
    const state = reactive({
      lat: 0,
      lng: 0,

      google: {} as any,
      map: null,
      markers: null,
    })
    const getLocal = () => {
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log("position.coords", position.coords)
        state.lat = position.coords.latitude
        state.lng = position.coords.longitude
      }, (err)=>{
        ElMessage.error(err.message);
      });
    }

    onMounted( async ()=>{
      await getLocal()
      await initMap()

    })

    const initMap = async () => {
      // const loader = new Loader({
      //   apiKey: process.env.VUE_APP_MAP_KEY!,
      //   version: "weekly",
      //   libraries: ["places"],
      //   language: "zh-TW",
      // });
      // state.google = await loader.load();
      // state.map = new state.google.maps.Map((document.getElementById("map") as HTMLElement) , {
      //   center: { lat: state.lat, lng: state.lng },
      //   zoom: 11,
      //   mapTypeControl: false,
      //   fullscreenControl: false,
      // });
      // console.log(state)
    };




    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>
.map-box {
  @apply w-screen h-screen;
  .vue-map-container{
    @apply w-full h-full;
  }
}
</style>

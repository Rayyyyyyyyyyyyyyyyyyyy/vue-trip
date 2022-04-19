<template lang="pug">
.container--page
  Header

  .container
    BackBtn
    .card
      .trip-page-header
        img(:src="defaultImgUrl + tripData.imageUrl" alt="")

      .trip-page-main
        .trip-page-main-title
          .page-title {{ tripData.actName }}
          .sub-title
            svg-icon(name="location" color="#012f6a")
            p {{ tripData.address }}

        .trip-page-main-value {{ tripData.description }}

      GMapMap(
      :center="center"
      :zoom="7"
      map-type-id="terrain")







</template>

<script lang="ts">
import {defineComponent, onMounted, toRefs} from "vue";
import {defaultImgUrl} from "@/const/appConsts";
import {reactive} from "@vue/reactivity";
import Header from "@/components/HomePage/Header.vue";
import BackBtn from "@/components/BackBtn.vue";
import BaseApi from "@/services/api";
import {MAP_API_KEY} from "@/config";

export default defineComponent({
  name: "TripPage",
  components: {
    BackBtn,
    Header,

  },
  props: {
    id: {
      type: String
    }
  },
  setup(props) {
    const state = reactive({
      tripData: {} as any,
      center: {} as {lat: number, lng: number}
    })


    const getTripData = async () => {
      const activity = await require("@/assets/jsonData/activity.json")
      const tripData = activity.find((_: any) => {
        return _.actId == props.id!
      })
      state.tripData = tripData
      state.center = {
        lat: JSON.parse(tripData.longitude),
        lng: JSON.parse(tripData.latitude)
      }

    }



    onMounted( ()=>{
      getTripData()
    })


    return {
      ...toRefs(state),
      defaultImgUrl,

    }
  }
});
</script>

<style lang="scss" scoped>


.trip-page {
  &-header {
    @apply w-full overflow-hidden;
    height: 50vh;
    img {
      @apply w-full h-full object-cover rounded-lg;
    }
  }

  &-main {
    @apply px-4 py-6;

    &-title {
      @apply flex items-end mb-4;

      .sub-title {
        @apply text-lg font-medium text-secondary;
        @apply flex items-center ml-4;
        p {
          @apply ml-2;
        }
      }

    }
    &-value {
      @apply text-base text-secondary;
      @apply flex;

    }
  }

}
.vue-map-container {
  @apply w-full;
  height: 500px;
}
</style>

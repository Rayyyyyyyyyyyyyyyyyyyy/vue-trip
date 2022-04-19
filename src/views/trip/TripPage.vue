<template lang="pug">
.container--page
  Header
  .card.container
    .trip-page-header
      img(:src="defaultImgUrl + tripData.imageUrl" alt="")

    .trip-page-main
      .trip-page-main-title
        .page-title {{ tripData.actName }}
        .sub-title
          svg-icon(name="location" color="#012f6a")
          p {{ tripData.address }}

      .trip-page-main-value
        p {{ tripData.description }}



</template>

<script lang="ts">
import {defineComponent, onMounted, toRefs} from "vue";
import {defaultImgUrl} from "@/const/appConsts";
import {reactive} from "@vue/reactivity";
import Header from "@/components/HomePage/Header.vue";

export default defineComponent({
  name: "TripPage",
  components: {
    Header
  },
  props: {
    id: {
      type: String
    }
  },
  setup(props) {
    const state = reactive({
      tripData: {} as any
    })


    const getTripData = async () => {
      const activity = await require("@/assets/jsonData/activity.json")
      state.tripData = activity.find((_: any) => {
        return _.actId == props.id!
      })
      console.log(state.tripData)
    }


    onMounted( ()=>{
      getTripData()
    })


    return {
      ...toRefs(state),
      defaultImgUrl

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

</style>

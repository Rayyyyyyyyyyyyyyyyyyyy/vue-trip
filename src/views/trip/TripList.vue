<template lang="pug">
.trip-list
  Header
  .container
    .trip-list--title {{ searchTitle }}

    span(v-if="tripList.length > 0")
      el-row(:gutter="20")
        el-col(
          v-for="trip in tripList"
          :span="6")
          TripListItem(
            :key="trip.actId"
            :imgUrl="trip.imageUrl"
            :trip_title="trip.actName"
            :trip_content="trip.description"
            :trip_id="trip.actId"
          )







    el-empty(v-else)


</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Header from "@/components/HomePage/Header.vue";
import TripListItem from "@/components/TripListItem.vue";
import {TActivity} from "@/types/apiTypes";

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
      searchTitle: props.keyword,
      tripList: [] as TActivity[],
      lineSpan: [] as number[]
    })
    watch(()=>props.keyword, ()=>{
      state.searchTitle = props.keyword
    })


    const fetchData = async () => {
      const activity = await require("@/assets/jsonData/activity.json")
      if(props.keyword) {
        state.tripList = activity.filter((_: any)=>{
          return (_.cityName).includes(props.keyword) == true
        })
      }else{
        state.tripList = activity
      }
    }




    onMounted( async ()=>{
      await fetchData()
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
  background: url("@/assets/images/fixed-bg/blue-beach.jpeg") no-repeat;
  background-size: cover;

  .container {
    min-height: 100vh;

    .masonry {
      @apply flex flex-wrap;
    }
  }
  .header {
    @apply bg-primary/30;
  }
  &--title {
    @apply text-2xl;
  }
}

</style>

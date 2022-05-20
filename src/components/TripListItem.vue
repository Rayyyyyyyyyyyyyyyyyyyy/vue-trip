<template lang="pug">
.list-item(
  data-aos="zoom-in"
  data-aos-easing="ease-out"
  data-aos-duration="900"
  data-aos-delay="500"
  data-aos-offset="200"
  @click="goTripUrl")
  .list-item-header
    el-image(
      :src="defaultImgUrl + imgUrl"
      alt="img"
      fit="cover"
      lazy)

  .list-item-body
    .title {{ trip_title }}
    .content {{ trip_content }}






</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import {defaultImgUrl} from "@/const/appConsts";
import router from "@/router";
import RouterNames from "@/router/name";
import AOS from "aos";

export default defineComponent({
  name: "TripListItem",
  props: {
    imgUrl: {
      type: String
    },
    trip_title: {
      type: String
    },
    trip_content: {
      type: String
    },
    trip_id: {
      type: Number,
      require: true
    }

  },
  setup(props, {emit}) {
    const goTripUrl = () => {

      router.push({
        name: RouterNames.tripPage,
        params: {
          id: props.trip_id
        }
      })
    }
    onMounted( async ()=>{
      AOS.init()
    })


    return {
      defaultImgUrl,
      goTripUrl
    }
  }
});
</script>

<style lang="scss" scoped>
.list-item {
  @apply flex flex-col cursor-pointer;
  @apply mt-5 p-4 shadow-lg rounded-lg bg-bg;

  &-header {
    @apply rounded-xl;
  }

  &-body {
    @apply mt-2;


    .title {
      @apply text-xl font-medium text-text-light;
    }
    .content {
      @apply text-sm text-secondary mt-2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

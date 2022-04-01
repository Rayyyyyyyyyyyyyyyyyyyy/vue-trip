<template lang="pug">
.trip-card
  .trip-card--img
    img(:src="imgUrl")
  .trip-card--img-alt 台北市
  .trip-card--body
    .trip-card--body-title 萬華區剝皮寮亂亂逛
    .trip-card--body-content 萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛
    .trip-card--body-detail
      .trip-card--body-detail-left
      .trip-card--body-detail-right 詳細 >








</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";

export default defineComponent({
  name: "TripCard",
  props: {
    imgUrl: {
      type: String,
    }
  },
  setup(props) {

    onMounted(()=>{
      AOS.init()
    })




    return {
    }
  }
});
</script>

<style lang="scss" scoped>
.trip-card {
  @apply w-full rounded-lg shadow-md;
  @apply flex flex-col relative;
  @apply z-30;

  &--img {
    @apply h-1/2;
    @apply z-20;
    @apply overflow-hidden;

    img{
      @apply rounded-t-lg cursor-pointer;
      &:hover {
        transition: .5s;
        transform: scale(1.2);
      }
    }

    &-alt {
      @apply absolute left-0 z-30;
      top: -20px;
      @apply bg-primary-twitter/70 text-white;
      @apply p-2 rounded-full;

    }
  }

  &--body {
    @apply p-4 bg-white rounded-b-lg;

    &-title {
      @apply text-text text-lg font-medium;
      @apply mb-2;
    }
    &-content {
      @apply text-text-light text-base;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &-detail {
      @apply flex items-center justify-between my-2;

      &-left {
        @apply flex items-center;
      }
      &-right {
        @apply text-primary-light text-sm cursor-pointer;
      }
    }
  }
}
</style>

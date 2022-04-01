<template lang="pug">
.trip-card
  .trip-card--img
    img(:src="imgUrl")
    .trip-card--img-alt 台北市
  .trip-card--body
    .trip-card--body-title 萬華區剝皮寮亂亂逛
    .trip-card--body-content 萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛








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
  @apply flex flex-col cursor-pointer;
  @apply z-30;

  &--img {
    @apply h-1/2;
    @apply relative z-20;
    img{
      @apply rounded-t-lg;
    }

    &-alt {
      @apply absolute left-0 z-30;
      top: -20px;
      @apply bg-primary-twitter/70 text-white;
      @apply p-2 rounded-lg;

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
    }
  }
}
</style>

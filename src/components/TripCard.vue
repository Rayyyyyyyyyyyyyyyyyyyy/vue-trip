<template lang="pug">
.trip-card
  .trip-card--img
    img(:src="imgUrl")
  .trip-card--img-alt
    svg-icon(name="location" color="#1877f2")
    .item-text 台北市
  .trip-card--body
    .trip-card--body-title 萬華區剝皮寮亂亂逛
    .trip-card--body-content 萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛萬華區剝皮寮亂亂逛
    .trip-card--body-detail
      .trip-card--body-detail-left
        .trip-card--body-detail-left-item
          svg-icon(name="group")
          .item-text 200
        .trip-card--body-detail-left-item
          svg-icon(name="calendar")
          .item-text 200 天
      .trip-card--body-detail-right 詳細 >

  .trip-card--footer
    .trip-card--footer-item
      svg-icon(name="heart-smile")
      .item-text 200
    .trip-card--footer-item
      svg-icon(name="bookmark")
      .item-text 200








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
.item-text {
  @apply ml-2 text-sm font-bold;
}

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
      @apply bg-primary-twitter/50 text-white;
      @apply p-2 rounded-full text-white;
      @apply flex items-center;
    }
  }

  &--body {
    @apply p-4 bg-white ;
    @apply border-b-2;

    &-title {
      @apply text-text text-lg font-medium;
    }
    &-content {
      @apply text-text-light text-base;
      @apply mt-2 mb-6;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &-detail {
      @apply flex items-center justify-between;

      &-left {
        @apply flex items-center;
        &-item {
          @apply flex items-center;

          svg {
            @apply cursor-pointer;
          }
        }
        &-item + &-item {
          @apply ml-6;
        }
      }
      &-right {
        @apply text-primary-light text-sm cursor-pointer;
      }
    }
  }

  &--footer {
    @apply p-4 bg-white rounded-b-lg;
    @apply flex items-center;

    &-item {
      @apply flex-1 flex items-center justify-center;
      svg {
        @apply mr-6 cursor-pointer;
      }
    }
    &-item + &-item {
      @apply border-l-2;
    }
  }
}

</style>

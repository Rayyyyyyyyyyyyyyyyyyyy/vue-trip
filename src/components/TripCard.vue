<template lang="pug">
.trip-card
  .trip-card--img
    img(:src=`"https://cloud.culture.tw/" + imgUrl`)
  .trip-card--img-alt
    svg-icon(name="location" color="#1877f2")
    .item-text {{ trip_local }}
  .trip-card--body
    .trip-card--body-value
      .trip-card--body-title {{ trip_title }}
      .trip-card--body-content {{ trip_content }}

    .trip-card--footer 詳細 >









</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";

export default defineComponent({
  name: "TripCard",
  props: {
    imgUrl: {
      type: String,
      default: "/e_new_upload/task/a66dc343-cd8b-4ee0-a265-8d7fff520c3b/C2_315080000H_080758/eb67f84234d1581790e6d5ee8869c8344ba89d84.jpg"
    },
    trip_local: {
      type: String,
      default: "Taipei"
    },
    trip_title: {
      type: String,
      default: "Taipei"
    },
    trip_content: {
      type: String,
      default: "Taipei"
    },
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
  @media (max-width: 375px) {
    @apply text-xs;
  }
}

.trip-card {
  @apply w-full rounded-lg shadow-md;
  @apply flex flex-col relative;
  @apply z-30;

  &--img {
    @apply z-20 w-full overflow-hidden;
    height: 220px;


    img{
      @apply rounded-t-lg cursor-pointer w-full h-full;
      object-fit: cover;
      &:hover {
        transition: .5s;
        transform: scale(1.2);
      }
    }

    &-alt {
      @apply absolute left-0 z-30;
      top: -20px;
      @apply bg-icons-twitter/50 text-white;
      @apply p-2 rounded-full text-white;
      @apply flex items-center;
    }
  }

  &--body {
    @apply p-4 bg-white ;
    @apply rounded-b-xl;
    @apply flex flex-col justify-between;

    &-value {
      @apply flex-1;
    }


    &-title {
      @apply text-text text-lg font-medium;
      @apply flex-1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      @media (max-width: 1024px) {
        @apply text-base;
      }
    }
    &-content {
      @apply text-text-light text-sm;
      @apply mt-2 mb-6 flex-1 h-10;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

    }

  }

  &--footer {
    @apply flex items-end justify-end;
    @apply text-primary cursor-pointer;
    @apply flex-1;
  }
}

</style>

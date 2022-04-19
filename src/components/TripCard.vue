<template lang="pug">
.trip-card
  .trip-card--img(@click="cardClicked")
    img(:src="defaultImgUrl + card_data.imageUrl")
  .trip-card--img-alt
    svg-icon(name="location" color="#0b4fa7")
    .item-text {{ card_data.cityName }}
  .trip-card--body
    .trip-card--body-value
      .trip-card--body-title {{ card_data.actName }}
      .trip-card--body-content {{ card_data.description }}

    .trip-card--footer
      p(@click="cardClicked") 詳細 >









</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";
import { defaultImgUrl } from "@/const/appConsts";

export default defineComponent({
  name: "TripCard",
  emits: ["card_clicked"],
  props: {
    card_data: {
      type: Object
    }
  },
  setup(props, {emit}) {

    onMounted(()=>{
      AOS.init()
    })
    const cardClicked = () => {
      emit("card_clicked", props.card_data)
    }




    return {
      cardClicked,
      defaultImgUrl
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
      @apply bg-icons-twitter/70 text-white;
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
    @apply flex-1;

    p {
      @apply text-primary cursor-pointer;

      &:hover {
        @apply text-primary-light;
      }
    }
  }
}

</style>

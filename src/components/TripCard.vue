<template lang="pug">
.trip-card
  .trip-card-img
    img(:src="imgUrl")








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
  @apply flex flex-col;
}
</style>

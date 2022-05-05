<template lang="pug">
.h-screen.w-screen.flex.justify-center.items-center.text-xl
  p {{keyword}}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TripList",
  props:{
    keyword: {
      type: String
    }
  },
  setup(props){
    console.log(props.keyword)
    return {}
  }
});
</script>

<style lang="scss" scoped></style>

<template lang="pug">
.trip-list

  HomeHeader
  p {{keyword}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomePage/HomeHeader.vue";

export default defineComponent({
  name: "TripList",
  components: {
    HomeHeader
  },
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

<style lang="scss" scoped>

.trip-list {
  .home-header-style {
    @apply bg-primary-light;
    position: unset;
  }
}

</style>

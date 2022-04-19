<template lang="pug">
.container
  HomeHeader


</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomePage/HomeHeader.vue";

export default defineComponent({
  name: "TripPage",
  components: {
    HomeHeader
  }
});
</script>

<style lang="scss" scoped>


</style>

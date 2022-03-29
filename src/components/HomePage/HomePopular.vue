<template lang="pug">
.popular
  TripCard





</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";

export default defineComponent({
  name: "HomeGroup",
  components: {
    TripCard
  },
  props: {

  },
  setup(props) {



    return {
    }
  }
});
</script>

<style lang="scss" scoped>
.popular {
  @apply py-8 w-full h-screen;

}
</style>

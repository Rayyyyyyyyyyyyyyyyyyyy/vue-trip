<template lang="pug">
el-input()




</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";

export default defineComponent({
  name: "SearchInput",
  components: {

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
::v-deep(){
  .el-input{
    &__inner{
      @apply h-12;
    }
  }
}

</style>

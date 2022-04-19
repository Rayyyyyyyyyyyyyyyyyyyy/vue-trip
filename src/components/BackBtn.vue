<template lang="pug">
.back-btn
  svg-icon.mr-2(name="arrow-left")
  el-button.btn(
  type="text"
    @click="$router.back()"
  ) {{ back_text }}
</template>
<script lang="ts">

import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";
import {reactive} from "@vue/reactivity";
import SvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  name: "BackBtn",
  components: {

  },
  props: {
    back_text: {
      type: String,
      default: "Back"
    }

  },
  setup(props) {
    const state = reactive({
    })



    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>
.back-btn{
  @apply cursor-pointer;
  @apply flex items-center mb-4 ;
}
.btn {
  @apply text-secondary;
}

</style>

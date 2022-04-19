<template lang="pug">
.back-btn
  svg-icon.mr-2(name="arrow-left")
  el-button.btn(
  type="text"
    @click="backClicked"
  ) {{ back_text }}
</template>
<script lang="ts">

import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";
import TripCard from "@/components/TripCard.vue";
import {reactive} from "@vue/reactivity";
import SvgIcon from "@/components/SvgIcon.vue";
import router from "@/router";

export default defineComponent({
  name: "BackBtn",
  emits:["backClickedEmit"],
  components: {

  },
  props: {
    back_text: {
      type: String,
      default: "Back"
    }

  },
  setup(props, {emit}) {
    const state = reactive({
    })

    const backClicked = () => {
      emit("backClickedEmit")
    }


    return {
      ...toRefs(state),
      backClicked
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

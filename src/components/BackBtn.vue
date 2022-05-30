<template lang="pug">
.back-btn(@click="backClicked")
  svg-icon.mr-2(name="arrow-left")
  el-button.btn(
  type="text"
  ) {{ back_text }}
</template>
<script lang="ts">

import {defineComponent, onMounted, toRefs} from "vue";
import {reactive} from "@vue/reactivity";

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

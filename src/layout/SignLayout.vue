<template lang="pug">
.sign
  .flex-1
    svg-icon.cursor-pointer(
      @click="goHomeUrl"
      name="header-logo" :width="450" :height="450")
  .flex-1
    .sign-card
      router-view
</template>
<script  lang="ts">

import {reactive} from "@vue/reactivity";
import {defineComponent, toRefs, watch} from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import {useRouter} from "vue-router";
import RouterNames from "@/router/name";

export default defineComponent({
  name: "SignLayout",
  components: {
    SvgIcon

  },
  props: {

  },
  setup(props) {

    const state = reactive({

    })
    const router = useRouter()

    const goHomeUrl = () => {
      router.push({
        name: RouterNames.home
      })
    }




    return {
      ...toRefs(state),
      goHomeUrl
    }
  }
});

</script>
<style lang="scss" scoped>
.sign {
  @apply w-screen h-screen;
  @apply flex items-center;
  @apply p-24;
  background: url("@/assets/images/sign-up.jpg") no-repeat;
  background-size: cover;


  &-card {
    @apply bg-white/70 shadow-xl rounded-lg;
    @apply py-6 px-10 mx-12;
  }
}
</style>

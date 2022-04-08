<template lang="pug">








</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";

export default defineComponent({
  name: "ForgotPassword",
  props: {

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

</style>

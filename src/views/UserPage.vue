<template lang="pug">
p user page

</template>

<script lang="ts">
import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";
import {reactive} from "@vue/reactivity";

export default defineComponent({
  name: "UserPage",
  components: {

  },
  props: {

  },
  setup(props) {
    const state = reactive({

    });



    onMounted( ()=>{
      AOS.init()

    })


    return {
      ...toRefs(state),

    }
  }
});
</script>

<style lang="scss" scoped>

</style>

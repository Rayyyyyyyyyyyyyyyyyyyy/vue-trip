<template lang="pug">
.test
  img(:src="logo")
.test( data-aos="fade-zoom-in"
  data-aos-easing="ease-in-back"
  data-aos-delay="300"
  data-aos-offset="0")
  img(:src="logo")
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import AOS from "aos";
import logo from "@/assets/logo.png"

export default defineComponent({
  name: "HomePage",
  props: {

  },
  setup(props) {

    onMounted(()=>{
      AOS.init()
    })




    return {
      logo
    }
  }
});
</script>

<style lang="scss" scoped>

</style>

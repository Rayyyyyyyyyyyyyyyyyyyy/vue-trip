<template lang="pug">
.news
  .news-bg.news-main
  .news-bg.news-main






</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";

export default defineComponent({
  name: "HomeNews",
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
.news {

}
</style>

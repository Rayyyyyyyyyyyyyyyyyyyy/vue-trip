
<template lang="pug">
.header.home-header-style
  svg-icon(name="header-logo" :width="160" :height="80" )
  .header_center
    el-tabs(v-model="activeName"  @tab-click="handleClick")
      el-tab-pane(label="行程規劃" name="planning")
      el-tab-pane(label="揪團旅行" name="group")
      el-tab-pane(label="達人講座" name="lecture")
  .header_right
    svg-icon(name="shopping-cart" :width="32" :height="32" color="#fff" )
    .profile-img
      el-image(:src="require('@/assets/images/cat-robbit.jpeg')" alt="profileIMG" fit="cover" )







</template>
<script lang="ts">
import {reactive} from "@vue/reactivity";
import SvgIcon from "@/components/SvgIcon.vue";
import {defineComponent, onMounted, toRefs} from "vue";
import AOS from "aos";


export default defineComponent({
  name: "HomeHeader",
  components: {SvgIcon},
  props: {

  },
  setup(props) {


    const state = reactive({
      activeName: "planning"
    })

    const handleClick = () => {
      console.log("handleClick")
    }


    return {
      ...toRefs(state),
      handleClick,
    }
  }
});



</script>

<style lang="scss" scoped>
.header {
  @apply h-24 px-6;
  @apply flex items-center justify-between;
  &_center {
    @apply flex-1;
    @apply flex items-center justify-center;
  }
  &_right {
    @apply border-l-2 border-white pl-4;
    @apply flex items-center justify-between;
  }
  .svg-icon {
    @apply cursor-pointer;
  }
}

::v-deep(){
  .el-tabs {
    &__header {
      @apply mb-0;
    }
    &__item {
      @apply text-white text-lg;
      padding: 0 40px;
    }

  }
  .is-active{
    @apply text-primary;
  }
}
.profile-img{
 @apply w-8 h-8 rounded-full bg-secondary overflow-hidden ml-4;
}

.home-header-style {
  @apply bg-transparent fixed top-0 left-0 z-20 w-full;
}


</style>

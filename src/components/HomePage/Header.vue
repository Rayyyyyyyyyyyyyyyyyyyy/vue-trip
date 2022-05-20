<template lang="pug">
.header
  svg-icon(
    @click="goHomeUrl"
    name="logo" :width="40" :height="40")
  .header_center

  .header_right
    svg-icon(
      @click="goUserUrl"
      name="user"
      :width="24"
      :height="24"
      color="#fff" )


</template>
<script lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
import RouterNames from "@/router/name";


export default defineComponent({
  name: "HeaderComponent",
  components: {
    SvgIcon
  },
  props: {

  },
  setup(props) {

    const router = useRouter()

    const goUserUrl = () => {
      router.push({
        name: RouterNames.home
      })
    }
    const goHomeUrl = () => {
      router.push({
        name: RouterNames.home
      });
    }


    return {
      goUserUrl,
      goHomeUrl
    }
  }
});



</script>

<style lang="scss" scoped>
.header {
  @apply px-6 py-4;
  @apply flex items-center justify-between;
  @apply bg-primary;
  &_center {
    @apply flex-1;
    @apply flex items-center justify-center;

  }
  &_right {
    @apply border-l-2 border-white pl-6;
    @apply flex items-center justify-around;
    .btn{
      @apply w-full bg-transparent text-white border-transparent;
    }

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
  @apply w-8 h-8 rounded-full bg-secondary overflow-hidden ml-6;
  @apply cursor-pointer;
}


</style>

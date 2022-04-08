
<template lang="pug">
.header.home-header-style
  svg-icon(name="header-logo" :width="160" :height="80" )
  .header_center

  .header_right(v-if="isAuth")
    svg-icon(name="shopping-cart" :width="32" :height="32" color="#fff" )
    .profile-img
      el-image(:src="require('@/assets/images/cat-robbit.jpeg')" alt="profileIMG" fit="cover" )

  .header_right(v-else)
    el-button.btn(
      @click="goSignUrl"
      plain) Sign in/up






</template>
<script lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
import RouterNames from "@/router/name";


export default defineComponent({
  name: "HomeHeader",
  components: {
    SvgIcon
  },
  props: {
    isAuth: {
      type: Boolean,
      default: false
    }

  },
  setup(props) {

    const router = useRouter()

    const goSignUrl = () => {
      router.push({
        name: RouterNames.signIn
      })
    }



    return {
      goSignUrl
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
    width: 15%;
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
}

.home-header-style {
  @apply bg-transparent fixed top-0 left-0 z-20 w-full;
}


</style>

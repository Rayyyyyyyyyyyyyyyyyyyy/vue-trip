<template lang="pug">
.sign-in
  .page-title Sign in
  .input-card
    el-input(
      placeholder="Email"
      v-model="email")
      template(#prepend)
        svg-icon(name="user" color="#323131")
  .input-card
    el-input(
      placeholder="Password"
      v-model="password"
      type="password"
      show-password)
      template(#prepend)
        svg-icon(name="lock" color="#323131")

  el-button.btn Sign in

  .sign-in-link
    p(@click="goSingUpUrl") Sign up
    p(@click="goForgotPassUrl") Forgot password

</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";
import {useRouter} from "vue-router";
import RouterNames from "@/router/name";

export default defineComponent({
  name: "SignIn",
  props: {

  },
  setup(props) {

    onMounted(()=>{
      AOS.init()
    })

    const router = useRouter()

    const goSingUpUrl = () => {
      router.push({
        name: RouterNames.signUp
      })
    }
    const goForgotPassUrl = () => {
      router.push({
        name: RouterNames.forgotPassword
      })
    }




    return {
      goSingUpUrl,
      goForgotPassUrl
    }
  }
});
</script>

<style lang="scss" scoped>
.sign-in {
  @apply text-center;

  .page-title {
    @apply mb-6 text-secondary;
  }
  .btn {
    @apply bg-primary/80 text-white;
    @apply w-full my-4;
  }

  &-link {
    @apply flex items-center justify-between;
    @apply text-base text-secondary;
    p {
      @apply cursor-pointer;
    }
  }
}


::v-deep() {
  .el-input {
    @apply h-10;

    &__inner {
      @apply h-full;
    }
  }
}



</style>

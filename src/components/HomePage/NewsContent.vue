<template lang="pug">
.page
  .page-title
    p(
      data-aos="fade-up"
    ) {{ title }}
    .hr(
      data-aos="flip-left"
    )
    div(
      data-aos-easing="ease-out"
      data-aos-delay="500"
      data-aos="fade-down")
      svg-icon(
        name="location"
        color="#fff"
        :width="48"
        :height="48")
  .page-content(
    data-aos="fade-up"
  ) {{ content }}
el-button.btn(
  data-aos="zoom-in"
  type="primary"
  size="large") {{ button_text }}


</template>
<script lang="ts">

import {defineComponent, onMounted} from "vue";
import AOS from "aos";

export default defineComponent({
  name: "NewsContent",
  props: {
    title: {
      type: String,
      default: "和附近朋友一起揪團旅行"
    },
    content: {
      type: String,
      default: "對於許多來說，最享受的莫過於三五好友，一同旅行。吃吃玩玩，彷彿重溫年輕的記憶。但對有些大人來說，也常常為了找不到旅伴而煩惱。 不妨透過旅歷認識旅伴，來場翻轉心情的冒險之旅！一起遊覽世界。"
    },
    button_text: {
      type: String,
      default: "尋找揪團"
    }

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

.page {
  @apply w-3/5 mx-auto font-bold mb-10;

  &-title {
    @apply flex items-center justify-between w-10/12 mx-auto;

    .hr {
      @apply border-t-2 border-white w-36;
    }
  }

  &-content {
    @apply text-xl mt-8 text-center;
  }
}

</style>

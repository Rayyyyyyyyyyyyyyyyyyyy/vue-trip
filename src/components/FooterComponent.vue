<template lang="pug">
.footer
  .container
    el-row.footer--row(justify="space-between")
      el-col.footer--col(:span="12")
        .footer--col-title 關於我們
        .footer--col-value 旅歷本著「誠實苦幹、精益求精、堅持品質、轉型升級」之經營宗旨，加入台灣旅行業的經營行列。在董事長親率全體員工胼手胝足的努力下，歷經旅遊業的草創期、成長期、穩定期；迄今已 30 年有成 。現有員工 730 員，2017 年營業淨額 64 億元。更由於董事長堅持『旅遊高品質、價位中級化』：用心、誠信、專業的服務客群為理念，致力於當旅客的旅遊規劃師。更贏得所有客戶及業界一致的讚譽與肯定的口碑。

      el-col.footer--col(:span="4")
        .footer--col-title 服務中心
        .footer--col-value.footer--col-link(
          v-for="text in centerLink") {{ text }}

      el-col.footer--col(:span="4")
        .footer--col-title 常見問題
        .footer--col-value.footer--col-link(
          v-for="text in QALink") {{ text }}

    .hr

    .footer--share-link
      .footer--share-link-text Travel Planner © 2021 All Rights Reserved by隱私·相關條款·網站地圖
      .footer--share-link-icons
        .footer--share-link-icons-item.fb
          svg-icon(name="facebook" :width="24" :height="24" color="#fff")
        .footer--share-link-icons-item.youtube
          svg-icon(name="youtube" :width="24" :height="24" color="#fff")
        .footer--share-link-icons-item.twitter
          svg-icon(name="twitter" :width="24" :height="24" color="#fff")
        .footer--share-link-icons-item.ig
          svg-icon(name="instagram" :width="24" :height="24" color="#fff")








</template>
<script lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";

import {defineComponent, onMounted} from "vue";
import AOS from "aos";

export default defineComponent({
  name: "FooterComponent",
  components: {
    SvgIcon
  },
  props: {

  },
  setup(props) {

  const centerLink = [
      "線上客服",
      "常見問題",
      "隱私權政策",
      "Cookie政策",
      "服務條款"
  ]
  const QALink = [
    "新冠肺炎因應措施",
    "用戶支援",
    "退訂選項",
    "夥伴服務",
    "信任與安全",
  ]

    onMounted(()=>{
      AOS.init()
    })




    return {
    centerLink,
    QALink
    }
  }
});
</script>

<style lang="scss" scoped>
.footer {
  @apply w-full p-8 bg-bg-footer text-white;

  &--row {
    @media (max-width: 768px) {
      @apply flex-col;

      .el-col-12 {
        max-width: 100%;
      }
      .el-col-4 {
        max-width: 100%;
      }

    }
  }

  @media (max-width: 768px) {
    &--col + &--col {
      @apply mt-6;
    }
  }

  &--col {
    @apply flex items-start justify-between flex-col;



    &-title {
      @apply font-bold mb-2;
    }

    &-value {
      @apply opacity-60;
    }

    &-link {
      @apply cursor-pointer;
    }
    &-link:hover {
      @apply text-primary-light;
    }
  }


  .hr{
    @apply border-t-2 border-white opacity-60;
    @apply w-7/12 mx-auto my-8;
  }

  &--share-link {
    @apply flex items-center justify-between;
    @media (max-width: 768px) {
      @apply flex-col ;
    }

    &-text {
      @apply opacity-60;
    }
    &-icons {
      @apply flex items-center;
      @media (max-width: 768px) {
        @apply mt-4 justify-center ;
      }

      &-item {
        @apply w-10 h-10 rounded-full bg-icons;
        @apply flex justify-center items-center;
        @apply cursor-pointer;
      }

      &-item + &-item {
        @apply ml-4;
      }
    }
  }
}

.fb {
  &:hover {
    @apply bg-icons-fb;

  }
}
.ig {
  &:hover {
    background: linear-gradient(
    #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80
    );
  }
}
.youtube {
  &:hover {
    @apply bg-icons-yt;
  }
}
.twitter {
  &:hover {
    @apply bg-icons-twitter;
  }
}

</style>

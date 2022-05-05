<template lang="pug">
.trip-list

  HomeHeader
  p {{keyword}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomePage/HomeHeader.vue";

export default defineComponent({
  name: "TripList",
  components: {
    HomeHeader
  },
  props:{
    keyword: {
      type: String
    }
  },
  setup(props){
    console.log(props.keyword)

    // const axios = require("axios");
    //
    // const options = {
    //   method: 'GET',
    //   url: 'https://pokedex2.p.rapidapi.com/pokedex/uk',
    //   headers: {
    //     'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com',
    //     'X-RapidAPI-Key': 'cee7caee49msh2a537da5b34ad3ep10c2dejsn87bf65bd6a8b'
    //   }
    // };
    //
    //
    //
    //
    //
    // axios.request(options).then(function (response: any) {
    //   console.log(response.data);
    // }).catch(function (error: any) {
    //   console.error(error);
    // });


    //  https://readcereal.com/category/travel/
    return {}
  }
});
</script>

<style lang="scss" scoped>

.trip-list {
  .home-header-style {
    @apply bg-primary/30;

  }
}

</style>

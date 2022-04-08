import {reactive} from "@vue/reactivity";
import {ElMessage} from "element-plus";


const state = reactive({
  lat: 0,
  lng: 0

});

const getters = {

};

const actions = {

  getLocal() {
    navigator.geolocation.getCurrentPosition((position)=>{
      state.lat = position.coords.latitude
      state.lng = position.coords.longitude
    }, (err)=>{
      ElMessage.error(err.message);
    });
  },


};
export default {
  state,
  getters,
  actions
};

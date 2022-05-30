import RouterNames from "@/router/name";
import router from "@/router";

export class RouterUrlModel {
  route_name: typeof RouterNames
  constructor() {
    this.route_name = RouterNames
  }

  goUserUrl() {
    // ElMessage("Coming soon")

    router.push({
      name: RouterNames.userPage
    })
  }

  goHomeUrl() {
    router.push({
      name: RouterNames.home
    });
  }





}



export const routerUrlModel = new RouterUrlModel();

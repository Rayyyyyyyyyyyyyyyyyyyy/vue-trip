
import { ElMessage } from "element-plus";
import axios from "axios";
import {API_DOMAIN, MAP_API_DOMAIN, WEATHER_API_DOMAIN} from "@/config";
import { StatusCodes } from "http-status-codes";
import { EApiPaths, map_domainUrl} from "@/const/appConsts";

const axiosGeneral = axios.create({
  baseURL: API_DOMAIN,
  timeout: 10000
});
const axiosWeather = axios.create({
  baseURL: WEATHER_API_DOMAIN,
  timeout: 10000
});
const axiosMap = axios.create({
  baseURL: MAP_API_DOMAIN,
  timeout: 10000
});



axios.defaults.headers.common["Authorization"] = ""
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["crossDomain"] = true;

function updateAuthorizationToken() {

}
const ENCODING_WORKAROUND_KEY = Symbol();


//
//    A X I O S
//    G E N E R A L
//
//
axiosGeneral.interceptors.request.use(
  config => {
    updateAuthorizationToken();
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosGeneral.interceptors.response.use(
  response => {
    if (response?.status == StatusCodes.OK) {
      // @ts-ignore
      window[ENCODING_WORKAROUND_KEY] = response;

      return Promise.resolve(response);
    } else {
      if (response?.status === StatusCodes.NO_CONTENT) {
        console.warn("未找到資源");
      }
      return Promise.reject(response);
    }
  },
  async (error: any) => {
    if (error) {
      const errorResponse = error.response;
      if (errorResponse?.status === StatusCodes.UNAUTHORIZED) {

      } else if (errorResponse?.status == StatusCodes.FORBIDDEN) {
        ElMessage({
          message: "403 Forbidden: Access is Denied",
          center: true,
          showClose: false,
          type: "warning"
        });
      }
      // here we reject a error.response, so that user could catch it later on ...
      // 要回傳error.response才能接收到error message
      return Promise.reject(error.response);
    } else {
      // 斷網
      // here we reject a error.response, so that user could catch it later on ,.
      ElMessage({
        message: "Internet connection is poor, please try again later",
        center: true,
        showClose: false,
        type: "warning"
      });
      return Promise.reject(error.response);
    }
  }
);


function post(url: string, data: Record<string, any>): Promise<any> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    axiosGeneral({
      method: "post",
      url,
      data: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}


function get<T>(url: string, data: Record<string, any> = {}): Promise<T> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    axiosGeneral({
      method: "get",
      url,
      params: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getWeather<T>(url: string, data: Record<string, any> = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    axiosWeather({
      method: "get",
      url: url + map_domainUrl,
      params: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function put(url: string, data: Record<string, any>): Promise<any> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    axiosGeneral({
      method: "put",
      url,
      data: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function del(url: string, data: Record<string, any>): Promise<any> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    axiosGeneral({
      method: "delete",
      url,
      data: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}




const BaseApi = {
  getWeatherData(): Promise<any> {
    return getWeather(`${EApiPaths.future36}`);
  },


};

export default BaseApi;

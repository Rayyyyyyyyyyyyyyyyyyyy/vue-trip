import {API_WEATHER_KEY, MAP_API_KEY} from "@/config";

export const weather_url =  `?Authorization=${(API_WEATHER_KEY!)}&format=JSON`


export enum EApiPaths {
  future36 = "F-C0032-001",

}

export const weatherIconRul = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon"

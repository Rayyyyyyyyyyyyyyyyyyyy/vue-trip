import {API_WEATHER_KEY} from "@/config";

export const map_domainUrl = `?Authorization=${(API_WEATHER_KEY!).toString()}&format=JSON`

export enum EApiPaths {
  future36 = "F-C0032-001"

}


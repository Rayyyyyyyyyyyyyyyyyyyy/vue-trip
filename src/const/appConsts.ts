import {API_WEATHER_KEY} from "@/config";

export const weather_url =  `?Authorization=${(API_WEATHER_KEY!)}&format=JSON`


export enum EApiPaths {
  future36 = "F-C0032-001",

}

export const weatherIconRul = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon"

export const defaultImgUrl = "https://cloud.culture.tw"



export const city_name = {
  "基隆市": "Keelung",
  "新北市": "New Taipei City",
  "台北市": "Taipei City",
  "桃園市": "Taoyuan City",
  "新竹縣": "Hsinchu County",
  "新竹市": "Keelung",
  "苗栗市": "Miaoli City",
  "苗栗縣": "Miaoli County",
  "台中市": "Taichung City",
  "彰化縣": "Changhua County",
  "彰化市": "Changhua City	",
  "南投市": "Nantou City	",
  "南投縣": "Nantou County",
  "雲林縣": "Yunlin County",
  "嘉義縣": "Chiayi County",
  "嘉義市": "Chiayi City",
  "台南市": "Tainan City",
  "高雄市": "Kaohsiung City",
  "屏東縣": "Pingtung County",
  "屏東市": "Pingtung City",
  "宜蘭縣": "Yilan County",
  "宜蘭市": "Yilan City",
  "花蓮縣": "Hualien County",
  "花蓮市": "Hualien  City",
  "台東市": "Taitung City",
  "台東縣": "Taitung County",
  "澎湖縣": "Penghu County",
  "金門縣": "Kinmen County",
  "馬祖": "Matsu	Matus",
}

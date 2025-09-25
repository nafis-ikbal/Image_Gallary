import { API } from "./Api";

export const getData = {
  //get images when search
  getImages: (params) => {
    const url = "search/photos";
    return API.get(url, params);
  },
 
  //get random image
  getRandomImages: (params) => {
    const url = "photos";
    return API.get(url, params);
  },
};
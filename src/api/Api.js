import axios from "axios";

//create api
const API = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: 'rceZreUcb2eYW1rkbmNV5QK9N5edrT6DmWmd1Ob5gXc',  //use your own access key
    per_page: 16,
  }
});

export {API};
import axios from "axios";

const instance = axios.create({
  baseURL: "https://emt-back-end-project.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;

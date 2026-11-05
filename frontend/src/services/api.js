
import axios from "axios";

const API = axios.create({
  baseURL: "https://findora-campus-lost-and-found-portal.onrender.com/api"
});

export default API;

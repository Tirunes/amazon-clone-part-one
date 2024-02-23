import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseUrl: "http://127.0.0.1:5001/clone-f1500/us-central1/api",
  // deployed version of amazon server on render.com 
  baseUrl: "https://amazon-api-deploy-3rno.onrender.com"
});

export { axiosInstance };

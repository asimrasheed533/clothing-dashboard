import axios from "axios";

export default axios.create({
  baseURL: "https://clothing-api-production.up.railway.app/api/",
});

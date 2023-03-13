import Axios from "axios";

const axiosInstanace = Axios.create({
  baseURL: "https://asos2.p.rapidapi.com/",
  timeout: 120000,
});

export default axiosInstanace;

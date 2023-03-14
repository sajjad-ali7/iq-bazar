import Axios from "axios";

const axiosInstanace = Axios.create({
  baseURL: "https://mock.redq.io/api/",
  timeout: 120000,
});

export default axiosInstanace;

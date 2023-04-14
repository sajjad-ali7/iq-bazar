import Axios from "axios";

const axiosInstanace = Axios.create({
  baseURL: "https://mock.redq.io/api/products?",
  timeout: 120000,
});

export default axiosInstanace;

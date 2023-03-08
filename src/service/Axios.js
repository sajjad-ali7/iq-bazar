import Axios from "axios";

const axiosInstanace = Axios.create({
  baseURL: "https://asos2.p.rapidapi.com/",
  timeout: 120000,
  headers: {
    "X-RapidAPI-Key": "54ac14f2b9mshbcc573e03da6201p139e14jsn3ee7d267addd",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
});

export default axiosInstanace;

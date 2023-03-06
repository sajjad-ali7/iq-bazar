import Axios from "axios";

const axiosInstanace = Axios.create({
  baseURL: "https://asos2.p.rapidapi.com/",
  timeout: 120000,
  headers: {
    "X-RapidAPI-Key": "fa1380b7f4msh377c0818280512dp11b6abjsnd0ead541e68f",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
});

export default axiosInstanace;

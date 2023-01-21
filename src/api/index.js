import axios from "axios";

const apiUrl = `http://192.168.0.139:8000/ninja-api`;

const fetchFromApi = async () => {
  const response = await axios.get(`${apiUrl}/events/healthcheck`, {});
  console.log(response);
};

export default fetchFromApi;

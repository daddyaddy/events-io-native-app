import axios from "axios";

const apiUrl = `https://aa1e-2a02-a311-60-a780-3440-52f1-f6b1-920.eu.ngrok.io/ninja-api`;

const fetchFromApi = async (endpoint) => {
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`, {
      headers: {
        "x-api-key": "f5ac49c05fac73a516653e1474b0c8f6d939ab07",
        "Content-Type": "application/json",
      },
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchEvents = async () => fetchFromApi("/events");

export default fetchFromApi;

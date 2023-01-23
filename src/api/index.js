import axios from "axios";

const apiUrl = `https://9eb1-2a02-a311-60-a780-f428-a052-4bf1-a203.eu.ngrok.io/ninja-api`;

const fetchFromApi = async (method, endpoint, params, payload) => {
  try {
    const response = await axios(`${apiUrl}${endpoint}`, {
      method,
      headers: {
        "x-api-key": "f5ac49c05fac73a516653e1474b0c8f6d939ab07",
        "Content-Type": "application/json",
      },
      body:
        method === "POST" && payload !== undefined && JSON.stringify(payload),
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const listEvents = async () => fetchFromApi("GET", "/events");

export const createEvent = async (payload) =>
  fetchFromApi("POST", "/events/", undefined, payload);

export const updateEvent = async (event_id, payload) =>
  fetchFromApi("PUT", "/events/", { event_id }, payload);

export default fetchFromApi;

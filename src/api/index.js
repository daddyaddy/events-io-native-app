import axios from "axios";
import { events as mockEvents } from "./mock/events";

const baseApiUrl = `https://5ee0-2a02-a311-60-a780-112c-fabe-83c8-19a4.eu.ngrok.io`;
const authApiUrl = `${baseApiUrl}`;
const apiUrl = `${baseApiUrl}/ninja-api`;

export const logIn = async (username, password) => {
  try {
    const response = await axios(`${authApiUrl}/auth-token/`, {
      method: "POST",
      data: { username, password },
    });
    const { data } = response;
    console.log("@", data);
    const { token } = data;
    return token;
  } catch (error) {
    console.error(error.response.data.detail);
  }
};

const fetchFromApi = async (method, endpoint, params, payload) => {
  try {
    const response = await axios(`${apiUrl}${endpoint}${params}`, {
      method,
      headers: {
        "x-api-key": "f5ac49c05fac73a516653e1474b0c8f6d939ab07",
        "Content-Type": "application/json",
      },
      data: payload,
    });
    const { data } = response;
    console.log("-----------------");
    console.log("REQ", payload);
    console.log("RES", data);
    console.log("-----------------");
    return data;
  } catch (error) {
    console.error(error.response.data.detail);
  }
};

export const listEvents = async () => {
  const events = (await fetchFromApi("GET", "/events", "")) || mockEvents;
  return events;
};

export const createEvent = async (payload) =>
  fetchFromApi("POST", "/events/", "", payload);

export const updateEvent = async (event_id, payload) =>
  fetchFromApi("PUT", "/events", `/${event_id}`, payload);

export default fetchFromApi;

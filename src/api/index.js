import axios from "axios";
import { events as mockEvents } from "./mock/events";

const apiUrl = `https://5ee0-2a02-a311-60-a780-112c-fabe-83c8-19a4.eu.ngrok.io/ninja-api`;

const fetchFromApi = async (method, endpoint, params, payload) => {
  try {
    const response = await axios(`${apiUrl}${endpoint}${params}`, {
      method,
      headers: {
        "x-api-key": "f5ac49c05fac73a516653e1474b0c8f6d939ab07",
        "Content-Type": "application/json",
      },
      body:
        method === "POST" && payload !== undefined && JSON.stringify(payload),
    });
    const { data } = response;
    console.log("@", data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const listEvents = async () => {
  const events = (await fetchFromApi("GET", "/events", "")) || mockEvents;
  console.log(events);
  return events;
};

export const createEvent = async (payload) =>
  fetchFromApi("POST", "/events/", "", payload);

export const updateEvent = async (event_id, payload) =>
  fetchFromApi("PUT", "/events", `/${event_id}`, payload);

export default fetchFromApi;

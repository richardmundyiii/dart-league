import sendRequest from "./send-request";
const BASE_URL = "/api/players";

export async function createPlayer() {
  return sendRequest(`${BASE_URL}/`);
}

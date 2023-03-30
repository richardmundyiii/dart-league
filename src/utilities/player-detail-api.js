import sendRequest from "./send-request";
const BASE_URL = "/api/players";

export async function getPlayerDetail(playerId) {
  return sendRequest(`${BASE_URL}/${playerId}`);
}

import sendRequest from "./send-request";
const BASE_URL = "/api/players";

export async function getTeamDetail(playerId) {
  return sendRequest(`${BASE_URL}/${playerId}`);
}

import sendRequest from "./send-request";
const BASE_URL = "/api/playerstandings";

export async function getPlayerStandings(division) {
  return sendRequest(`${BASE_URL}/${division}`);
}

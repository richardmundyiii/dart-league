import sendRequest from "./send-request";
const BASE_URL = "/api/standings";

export async function getTeamStandings(division) {
  return sendRequest(`${BASE_URL}/${division}`);
}

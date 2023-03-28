import sendRequest from "./send-request";
const BASE_URL = "/api/standings";

export async function getLeagueStandings(division) {
  return sendRequest(`${BASE_URL}/${division}`);
}

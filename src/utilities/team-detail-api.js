import sendRequest from "./send-request";
const BASE_URL = "/api/teams";

export async function getTeamDetail(teamId) {
  return sendRequest(`${BASE_URL}/${teamId}`);
}

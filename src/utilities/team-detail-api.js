import sendRequest from "./send-request";
const BASE_URL = "/api/teams";

export async function getTeamDetail() {
  return sendRequest(`${BASE_URL}/`);
}

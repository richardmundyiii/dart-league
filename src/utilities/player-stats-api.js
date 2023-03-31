import sendRequest from "./send-request";
const BASE_URL = "/api/playerstats";

export async function addRow(playerData, id) {
  return sendRequest(`${BASE_URL}/${id}/stats`, "POST", playerData);
}

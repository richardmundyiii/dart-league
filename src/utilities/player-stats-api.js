import sendRequest from "./send-request";
const BASE_URL = "/api/playerstats";

export async function addRow(playerData, id) {
  return sendRequest(`${BASE_URL}/${id}/stats`, "POST", playerData);
}

export async function deleteRow(id) {
  return sendRequest(`${BASE_URL}/${id}/stats`, "DELETE");
}

export async function updateRow(id, statsData) {
  return sendRequest(`${BASE_URL}/${id}/stats`, "PUT", statsData);
}

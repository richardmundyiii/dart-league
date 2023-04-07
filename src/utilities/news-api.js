import sendRequest from "./send-request";
const BASE_URL = "/api/news";

export async function createNews(newsFeed) {
  return sendRequest(`${BASE_URL}/`, "POST", newsFeed);
}

export async function updateNews(postId) {
  return sendRequest(`${BASE_URL}/${postId}`, "PUT", postId);
}

export async function deleteNews(postId) {
  return sendRequest(`${BASE_URL}/${postId}/`, "DELETE");
}

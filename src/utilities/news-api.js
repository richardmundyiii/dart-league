import sendRequest from "./send-request";
const BASE_URL = "/api/news";

export async function createNews() {
  return sendRequest(`${BASE_URL}/`);
}

export async function updateNews(postId) {
  return sendRequest(`${BASE_URL}/${postId}`);
}

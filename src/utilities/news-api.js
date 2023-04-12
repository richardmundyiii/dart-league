import sendRequest from "./send-request";
const BASE_URL = "/api/news";

export async function getAllArticles() {
  return sendRequest(`${BASE_URL}/`);
}

export async function createNews(newsFeed) {
  return sendRequest(`${BASE_URL}/`, "POST", newsFeed);
}

export async function updatePost(id, postData) {
  return sendRequest(`${BASE_URL}/${id}/news`, "PUT", postData);
}

export async function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

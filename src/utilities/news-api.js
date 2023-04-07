import sendRequest from "./send-request";
const BASE_URL = "/api/news";

export async function getAllArticles() {
  return sendRequest(`${BASE_URL}/`);
}

export async function createNews(newsFeed) {
  return sendRequest(`${BASE_URL}/`, "POST", newsFeed);
}

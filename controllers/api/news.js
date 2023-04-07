const NewsArticle = require("../../models/newsArticle");

module.exports = {
  index,
  createNews,
};

async function index(req, res) {
  try {
    const news = NewsArticle.find({});
    res.json(news);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createNews(req, res) {
  try {
    const newsArt = await NewsArticle.create(req.body);
    res.json(newsArt);
  } catch (err) {
    res.status(400).json(err);
  }
}

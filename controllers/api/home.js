const NewsArticles = require("../../models/newsArticle");

module.exports = {
  index,
};

async function index(req, res) {
  try {
    const news = await NewsArticles.find({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(400).json(err);
  }
}

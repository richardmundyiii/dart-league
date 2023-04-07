const NewsArticle = require("../../models/newsArticle");

module.exports = {
  createNews,
};

async function createNews(req, res) {
  try {
    console.log("working", req.body);
    const newsArt = await NewsArticle.create(req.body);
    res.json(newsArt);
  } catch (err) {
    res.status(400).json(err);
  }
}

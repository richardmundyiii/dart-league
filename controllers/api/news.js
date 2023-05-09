const NewsArticle = require("../../models/newsArticle");

module.exports = {
  index,
  createNews,
  updateArticle,
  deleteArticle,
};

async function index(req, res) {
  try {
    const news = await NewsArticle.find({});
    res.json(news);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createNews(req, res) {
  try {
    const newsArt = await NewsArticle.create(req.body);
    // console.log("working...", req.body);
    res.json(newsArt);
  } catch (err) {
    console.error("Error creating news article:", err);
    res.status(400).json(err);
  }
}

async function updateArticle(req, res) {
  try {
    const updatedArticle = await NewsArticle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteArticle(req, res) {
  try {
    const article = await NewsArticle.findOneAndDelete({ _id: req.params.id });
    res.json(article);
  } catch (err) {
    res.status(400).json(err);
  }
}

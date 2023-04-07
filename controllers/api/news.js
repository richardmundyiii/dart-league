const newsArticle = require("../../models/newsArticle");

module.exports = {
  createNews,
};

async function createNews(req, res) {
  console.log("working");
  console.log(req.body);
  //   newsArt = newsArticle.create(req.body);
}

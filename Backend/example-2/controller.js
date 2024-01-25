exports.getAllArticles = async (req, res, next) => {
  try {
    const { sort_by } = req.query;
    const allArticles = await fetchArticles(sort_by);
    res.status("200").send({ article: allArticles });
  } catch (err) {
    return next(err);
  }
};

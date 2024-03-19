exports.getArticleComments = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const associatedComments = await fetchArticleComment(articleId);
    res.status("200").send({ article: associatedComments });
  } catch (err) {
    return next(err);
  }
};

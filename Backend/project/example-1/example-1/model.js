exports.fetchArticleComment = (articleId) => {
  articleId = Number(articleId);
  if (Number.isInteger(articleId) === false) {
    console.log(articleId, "rejection");
    return Promise.reject({ msg: "invalid input" });
  }
  const query = `SELECT comment_id, votes, created_at, author,body,article_id FROM comments WHERE article_id = ${articleId} ORDER BY created_at DESC`;
  return db.query(query).then((data) => {
    if (data.rows.length === 0) {
      return Promise.reject({ msg: "Non-existent id" });
    } else {
      return data.rows;
    }
  });
};

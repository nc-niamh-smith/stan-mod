exports.fetchArticles = (sortingKey) => {
  let sortBy = "articles.created_at";
  const acceptedKey = {
    author: "articles",
    title: "articles",
    article_id: "articles",
    topic: "articles",
    votes: "articles",
    count_comment: "t2",
  };
  let key;
  const validInput = Object.keys(acceptedKey);
  if (sortingKey != undefined) {
    if (validInput.includes(sortingKey) === false) {
      return Promise.reject({ msg: "invalid Sort_by", status: 404 });
    }

    sortBy = `${
      Object.entries(acceptedKey).find((element) => {
        return element[0] === sortingKey;
      })[1]
    }.${sortingKey}`;
  }
  const query = format(
    `SELECT articles.author,articles.title,articles.article_id,articles.topic,articles.created_at,articles.votes,articles.article_img_url, t2.count_comment AS comment_count FROM articles LEFT JOIN (SELECT article_id, COUNT(*) AS count_comment FROM comments GROUP BY article_id) AS t2 ON articles.article_id = t2.article_id ORDER BY ${sortBy} ASC;`
  );
  return db.query(query).then((data) => {
    return data.rows;
  });
};

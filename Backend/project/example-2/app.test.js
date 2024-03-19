describe("GET /api/articles", () => {
  test("should return 200", () => {
    return request(app).get("/api/articles").expect(200);
  });
  test("should return an array of objects of all articles in the database. ", () => {
    const numOfArrayExpected = articleData.length;
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then((response) => {
        expect(response.body.article.length).toEqual(numOfArrayExpected);
      });
  });
  test("should return an array of objects, each with the following keys: title, article_idtopic, author,created_at,votes,image_img_url,comment_count  ", () => {
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then((response) => {
        expect(response.body.article).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              author: expect.any(String),
              title: expect.any(String),
              article_id: expect.any(Number),
              topic: expect.any(String),
              created_at: expect.any(String),
              votes: expect.any(Number),
              article_img_url: expect.any(String),
              comment_count: expect.any(String),
            }),
          ])
        );
      });
  });
  test("should return an array of objects, sorted by created_at date by default  ", () => {
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then(({ body }) => {
        expect(body.article).toBeSorted({ key: "created_at" });
      });
  });
  test("If specified a sortby optional parameter, will return object that is ordered by sorted by optional parameter, in asending order", () => {
    const sortingKey = "author";
    return request(app)
      .get(`/api/articles?sort_by=${sortingKey}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.article).toBeSorted({ key: sortingKey });
      });
  });

  test("should return  404 badRequest if sort_by parameter is invalid", () => {
    const sortingKey = "invalid";
    return request(app)
      .get(`/api/articles?sort_by=${sortingKey}`)
      .expect(404)
      .then((response) => {
        expect(response.body.msg).toBe(
          "Bad Request: sorting key provided is invalid."
        );
      });
  });
});

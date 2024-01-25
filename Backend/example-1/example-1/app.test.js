const request = require("supertest");
const db = require("../db/connection.js");
const {
  articleData,
  commentData,
  topicData,
  userData,
} = require("../db/data/test-data/index.js");
const apiData = require("../endpoints.json");
const seed = require("../db/seeds/seed.js");
const app = require("../app.js");
afterAll(() => {
  return db.end();
});
beforeEach(() => {
  return seed({ articleData, commentData, topicData, userData });
});

describe("GET /api/articles/:articleid/comments", () => {
  test("should return 200", () => {
    return request(app).get("/api/articles/1/comments").expect(200);
  });
  test("should return an array of object that all the comments of the given article ", () => {
    const articleId = 1;
    const count = commentData.reduce((counter, obj) => {
      if (obj.article_id === articleId) counter += 1;
      return counter;
    }, 0);

    return request(app)
      .get(`/api/articles/${articleId}/comments`)
      .expect(200)
      .then(({ body }) => {
        expect(body.article.length).toEqual(count);
      });
  });
  test("should return an array of object for the expected article id, each with the following keys: title, article_idtopic, author,created_at,votes,image_img_url,comment_count  ", () => {
    const articleId = 1;
    return request(app)
      .get(`/api/articles/${articleId}/comments`)
      .expect(200)
      .then((response) => {
        expect(response.body.article).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              comment_id: expect.any(Number),
              votes: expect.any(Number),
              created_at: expect.any(String),
              author: expect.any(String),
              body: expect.any(String),
              article_id: articleId,
            }),
          ])
        );
      });
  });
  test("should return an array of objects, sorted by created_at date by default where the most recent is on top ", () => {
    const articleId = 1;
    return request(app)
      .get(`/api/articles/${articleId}/comments`)
      .expect(200)
      .then(({ body }) => {
        expect(body.article).toBeSorted({
          key: "created_at",
          descending: true,
        });
      });
  });
  test("should return  400 badRequest if provided id is invalid", () => {
    const articleId = "invalid";
    return request(app)
      .get(`/api/articles/${articleId}/comments`)
      .expect(400)
      .then((response) => {
        expect(response.body.msg).toBe("Bad Request: ID provided is not valid");
      });
  });
  test("should return  404 badRequest if provided id is non existent", () => {
    const articleId = 9999;
    return request(app)
      .get(`/api/articles/${articleId}/comments`)
      .expect(404)
      .then((response) => {
        expect(response.body.msg).toBe(
          "Bad Request: ID provided has not been found."
        );
      });
  });
});

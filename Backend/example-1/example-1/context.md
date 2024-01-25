task 6 - GET/api/articles/:article_id/comments
https://l2c.northcoders.com/courses/be/nc-news#sectionId=Task_6,step=intro

# Description:

Should:

be available on /api/articles/:article_id/comments.
get all comments for an article.
Responds with:

an array of comments for the given article_id of which each comment should have the following properties:

- comment_id
- votes
- created_at
- author
- body
- article_id
  Comments should be served with the most recent comments first.

Consider what errors could occur with this endpoint, and make sure to test for them.

Remember to add a description of this endpoint to your /api endpoint.

# FOR NIAMH - PR - https://github.com/cls-c/nc-news/pull/9/files

Missing a test for 200 - over engineered their tests by using a reduce :O

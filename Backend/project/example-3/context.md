task 5 - GET /api/articles

# Description:

Should:

be available on /api/articles.
get all articles.
Responds with:

an articles array of article objects, each of which should have the following properties:
author
title
article_id
topic
created_at
votes
article_img_url
comment_count, which is the total count of all the comments with this article_id. You should make use of queries to the database in order to achieve this.
In addition:

the articles should be sorted by date in descending order.
there should not be a body property present on any of the article objects.
Consider what errors could occur with this endpoint, and make sure to test for them.

Remember to add a description of this endpoint to your /api endpoint.

# FOR NIAMH

PR - https://github.com/PENbDM/nc-coders-project/pull/2/files

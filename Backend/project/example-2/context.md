task 5 - GET /api/articles
https://l2c.northcoders.com/courses/be/nc-news#sectionId=Task_5,step=intro

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

PR - https://github.com/cls-c/nc-news/pull/6/files#diff-acd95129b1566f8af57a0f3b2bf86500a8c0ed53d5e45e156b930ed88b5cfa62

Mostly about practising good house keeping and convention in general. The main focus for this one is that they have over engineered their model.

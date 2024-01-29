29th January 2024

-Easy to forget /api endpoint, but when remembered will ask for it to be added.
-Should it be moved back to the end?

_TESTS_
-Missing test to say that the new endpoint is in endpoints.json 
-Expect tests to read "200: should do this thing" / "400: should do this thing in the event of this error"
-Overengineering tests (reduce)
-Creating a variable for something that doesn't change
-Should be using good grammar in test descriptions
-Test descriptions aren't matching the test assertion - i.e."should return an array of object that all the comments of the given article " checks for a count against the test data.
-Have checked that the articleId is actually the one they have determined
-Line 63: body.article = will always pass because it's only one article (not TDD)
-Line 85: bad request message on a 404 - they've copied and pasted from the test above.
-Copying and pasting a test is all well and good, if you know what you're doing. You may as well write it again in the time it's taken to edit it.

_CONTROLLER_
-Async await but not in the tests - inconsistency
-Nice destructuring, but inconsistent with the testing
-Key is incorrect - should be 'comments' (frontend is going to be tricky)

_MODEL_
-PSQL should reject an invalid ID, so lines 2-6 are irrelevant
-The query proves that they don't know what columns they have
-SQL injection 
-The 404 message doesn't match the test - lacks TDD

_GENERAL COMMENTS_
- Haven't seen a PR with all of this in one PR for a while.
- Would be tempted to look back at old tickets and potentially raise a concern to SL.
- Check for seminar-wide misunderstanding.
- Seeing loads of overengineering of tests that haven't been RGR and sql queries in tests where they didn't need to be.
- Mentioned that we're seeing this earlier and earlier - more testing but not smart testing.

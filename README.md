node-form-submit
================


email.conf
==========

email.conf contains sender gmail username and password, which is why we do not provide one by default.
However there is email_sample.conf included where you need to fill your own credentials.

[TT00CC06-3001 Lecture 5 task](https://github.com/paazmaya/modern-web-tools-with-node-js-book/blob/master/lectures/2014-09-23.md)

Create a group of three members, of which one is the owner of the given new repository, and the two
others are marked as its [contributors](https://help.github.com/articles/permission-levels-for-a-user-account-repository).

Half of the class will use Connect for the given task, while the other half shall use Express.

Application requirements:

- Run a web server that shows a feedback form in its index page, started with a command `npm start`
- The feedback form contains these items:
  - Name
  - Email
  - Feedback content
  - Submit button
- The form should be sent to the back end with a post request
- The input fields needs to be validated both front end and back end for not being empty and email being valid
- Valid feedback should be send to an email address configured via `package.json` OR send as a [Gist](https://developer.github.com/v3/gists/#create-a-gist)
- On successful form sending the page should show a suitable gif animation
- On any error cases, the form should remain usable and point out the possible errors
- Use of existing npm modules is encouraged
- All self made JavaScript code should be under linting rules, which can be run with `npm test`
- Application logic is separated to different files and used as modules

Divide the work for all the three members and work together in the same repository.

Once the work has started, add a link to the main repository in the list below.

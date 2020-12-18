# Interesting Tools Apps Script

A [Google Apps Script](https://developers.google.com/apps-script/overview) for
the [Interesting Tools Google
Sheet](https://docs.google.com/spreadsheets/d/1VGVFXtfOAhZqPdY30mrD_4towCj6lCdhuwr35vp4xgM/edit)
which shows one custom menu:

1. **Newsletter:** Get the HTML code to copy into the MailChimp template.

## Local development

This script is [bound](https://developers.google.com/apps-script/guides/bound)
to the Google Sheet container. You can access it from Tools > Script Editor
within the sheet but using `clasp` is preferred.

1. [Install `clasp`](https://developers.google.com/apps-script/guides/clasp).
2. Clone this repo.
3. Ensure you have the latest copy of the code by cloning into the repo:

`gclasp clone 1b2QUiAHmh-u42yy1x3LlOZhm7yGnRWKNNkNjsUtTnZqvlUe-w-2HtfRo`

3. Push any changes up to the live version: `clasp push` or have it watch for
   changes with `clasp push --watch`.

## Debugging

Check the live [Apps Script dashboard](https://script.google.com/home/all)

# Interesting Tools Apps Script

A [Google Apps Script](https://developers.google.com/apps-script/overview) for
the [Interesting Tools Google
Sheet](https://docs.google.com/spreadsheets/d/1VGVFXtfOAhZqPdY30mrD_4towCj6lCdhuwr35vp4xgM/edit)
which shows custom menus:

1. **Newsletter:**
    1. Get the HTML code to copy into the MailChimp template. Uses
    [lib-mailchimphtml](https://github.com/consoledotdev/lib-mailchimphtml).
    2. Create draft Tweets.

## Open development

This repository is public, but is not currently open source. We have opened the
repo to give a view into how we run [Console](https://console.dev) rather than
for it to be independent, release-quality code.

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

Check the live [Apps Script dashboard](https://script.google.com/home/all).

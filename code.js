/**
 * Interesting Tools Apps Script
 *
 * Shows the deploy menu in the Interesting Tools Google Sheet to get the HTML
 * code to copy into the MailChimp template.
 *
 */

/**
 * Create menu in Sheets UI
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();

  // Newsletter meny
  ui.createMenu('Newsletter')
    .addItem('Get MailChimp code', 'getMCCode')
    .addItem('Get Tweets', 'getTweets')
    .addToUi();
}

// These needs to be in the script and not the library because createTemplateFromFile
// is scoped to the calling script. If it's in the library, the template file must
// also be in the library.
function getMCCode() {
  // Create HTML from template
  var html = HtmlService
    .createTemplateFromFile('mailchimp.html')
    .evaluate()
    .setHeight(180);

  // Build title
  var title = 'Mailchimp code for ' + LibMailchimpHTML.getNextThurs();

  // Show modal
  SpreadsheetApp
    .getUi()
    .showModalDialog(html, title);
}

function getTweets() {
  // Create HTML from template
  var html = HtmlService
    .createTemplateFromFile('tweets.html')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setHeight(180);

  // Build title
  var title = 'Tweets for ' + LibMailchimpHTML.getNextThurs();

  // Show modal
  SpreadsheetApp
    .getUi()
    .showModalDialog(html, title);
}

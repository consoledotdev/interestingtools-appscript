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
    .addToUi();
}

/**
 * Newsletter
 */

// Menu functions
function getMCCode() {
  // Create HTML from template
  var html = HtmlService
    .createTemplateFromFile('mailchimp')
    .evaluate()
    .setHeight(180);

  // Build title
  var title = 'Mailchimp code for ' + getNextThurs();

  // Show modal
  SpreadsheetApp
    .getUi()
    .showModalDialog(html, title);
}

function getData() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangea1notation
  var range = spreadsheet.getRange("All Tools!A2:K31"); // First 30 rows
  var values = range.getValues();

  var newsletterDate = getNextThurs(true);
  var betaPrograms = [];

  for (var row in values) {
    var scheduledFor = new Date(values[row][3]);

    // Only show the ones scheduled for the next newsletter
    if (scheduledFor.getUTCFullYear() == newsletterDate.getUTCFullYear()
        && scheduledFor.getUTCMonth() == newsletterDate.getUTCMonth()
        && scheduledFor.getUTCDate() == newsletterDate.getUTCDate()) {
          Logger.log('Selecting: ' + values[row]);
          betaPrograms.push(values[row])
    }
  }

  return betaPrograms;
}

function getNextThurs(asDate = false) {
  var resultDate = new Date();

  // To get the next occurrance of a particular day of the week:
  // https://stackoverflow.com/a/1579109
  var thursday = 4; // Thursday
  var now = new Date();
  resultDate.setDate(now.getDate() + (thursday + (7 - now.getDay())) % 7);

  if (asDate) {
    return resultDate;
  } else {
    // To add leading zeros: https://stackoverflow.com/a/1579109
    return resultDate.getFullYear()
      + '-'
      + ('0' + (resultDate.getMonth() + 1)).slice(-2)
      + '-'
      + ('0' + resultDate.getDate()).slice(-2);
  }
}

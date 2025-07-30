const { google } = require('googleapis');
exports.handler = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });
  const sheets = google.sheets({ version: 'v4', auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Progress!A:C'
  });
  const rows = (res.data.values || []).slice(1);
  /* agrégation très simplifiée */
  const stats = rows.reduce((acc, [_, course, score]) => {
    acc[course] = (acc[course] || 0) + 1;
    return acc;
  }, {});
  const data = Object.entries(stats).map(([title, total]) => ({ title, completed: total }));
  return { statusCode: 200, body: JSON.stringify(data) };
};
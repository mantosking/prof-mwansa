const { google } = require('googleapis');
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405 };
  const { studentId, courseId, score } = JSON.parse(event.body);
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const sheets = google.sheets({ version: 'v4', auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Progress!A:C',
    valueInputOption: 'RAW',
    requestBody: { values: [[studentId, courseId, score, new Date().toISOString()]] }
  });
  return { statusCode: 200 };
};
const Text = require('../models/Text.js');

module.exports = class AsteroidService {

  static async sendText( to ) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;
    const client = require('twilio')(accountSid, authToken);
    // ?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
    const nasaAuth = process.env.NASA_API_KEY;
    const nasaUrl = process.env.NASA_API_URL;
    const date = new Date();
    const currentDate = date.toISOString().split('T')[0];
    console.log(currentDate)

//     let yourDate = new Date()
// yourDate.toISOString().split('T')[0]

    const nasaData = await request.get(`${nasaUrl}/?start_date=${currentDate}&end_date=${}&api_key=${nasaAuth}`)

    await Text.insert({ phone: to })

    client.messages
        .create({
          body: 'This is our tester text about a very dangerous asteroid.',
          from: fromNumber,
          to: to
        })
        .then(message => console.log(message.sid));
      }
}
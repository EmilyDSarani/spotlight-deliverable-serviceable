const Text = require('../models/Text.js');

module.exports = class AsteroidService {

  static async sendText( to ) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;
    const client = require('twilio')(accountSid, authToken);

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
const AsteroidService = require("../services/AsteroidService.js")

module.exports = Router()
  .post('/send-text', async (req, res, next) => {
    console.log(req.body);
  await AsteroidService.sendText(req.body.to)
})
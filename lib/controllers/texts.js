const AsteroidService = require("../services/AsteroidService.js")

module.exports = Router().post('/send-text', async (req, res, next) => {
  await AsteroidService.sendText(req.body.to)
})
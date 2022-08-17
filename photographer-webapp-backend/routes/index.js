const app = require('express');
const router = app.Router();

const mailController = require('../controllers/mailController');

router.post('/send-mail', mailController.sendMail);

module.exports = router;
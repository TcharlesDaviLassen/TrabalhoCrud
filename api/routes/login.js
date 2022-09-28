const router = require('express').Router();
const loginController = require('../controllers/LoginController');

router.post('/', loginController.validate);

// router.post('/create', loginController.create);


module.exports = router;

const console = require('console');
const md5 = require('md5');
const LogsController = require('../controllers/LogsController');

const createUser = require('../models/User.js')


class LoginsController {

  validate = async (req, res, next) => {
    req.body.password = md5(req.body.password);

    let flag = false;

    for (const user of req.body.data) {

      if (user.password === req.body.password && user.name === req.body.name) {
        flag = true;
        res.send();
        await LogsController.create({ action: `${user.name} LOGGED`, method: req.method });
      } else {
        next()
      }
    }
    if (flag) {
      res.status(404);
    }
  }

  // create = async (req, res, next) => {
  //   try {
  //     req.body.password = md5(req.body.password);
     
  //     const datas = await (req);
  //     const dado = datas.body
  //     console.log(dado)

  //     res.json(await createUser.create(dado));
  //     await LogsController.create({ action: "USER CADASTRADO", method: req.method });
  //   } catch (error) {
  //     res.status(400).json({ error });
  //   }

  // }


}

module.exports = new LoginsController();
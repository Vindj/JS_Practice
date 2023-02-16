const Router = require('express');
const userController = require('../controller/user.controller');
const router = new Router()


router.post('/Add_user',userController.createUser);
router.get('/Get_users',userController.getUsers);
router.get('/Get_user/:id',userController.getOneUser);
router.put('/Edit_user',userController.updateUser);
router.delete('/Delete_user/:id',userController.deleteUser);

module.exports = router